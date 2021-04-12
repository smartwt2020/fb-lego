/* eslint-disable no-useless-catch */
/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
/* eslint-disable no-new-func */
/* jshint esversion: 6 */
/* jshint -W054 */
import store from '@/store'
import axios from 'axios'
import log from './logMsg'
export default {

  // property logic
  GetPropertyValue: function (name) {
    const property = store.state.logic.property
    if (name in property) {
      return property[name].value
    } else {
      log.InvalidGetProperty(name)
    }
  },
  SetPropertyValue: function (name, value) {
    const property = store.state.logic.property
    if (property.hasOwnProperty(name)) {
      property[name].value = value
      property[name].lastUpdated = new Date().toISOString()
      log.PropertyUpdatedSuccessfully(name, value)
      return property[name]
    } else {
      log.PropertyUpdateFailed(name)
    }
  },

  // TODO: Optimize Sting to value function
  GetValueString: function (str) {
    try {
      const itr = str.matchAll('{{.*?}}')
      let result = itr.next()
      while (!result.done) {
        let value

        // get the regex match
        const key = result.value[0]

        // get key list EX: property.abc.value => ['property', 'abc', 'value]
        const keyList = key.slice(2, -2).trim().split('.')

        // Get value form required logic
        if (['property', 'datasocket', 'datasource'].includes(keyList[0])) {
          if (keyList[1]) {
            switch (keyList[0]) {
              case 'property': value = this.GetPropertyValue(keyList[1]); break
              case 'datasource': value = this.GetDataSourceData(keyList[1]); break
              case 'datasocket': value = this.GetDataSocketData(keyList[1]); break
              default : value = 'undefined'
            }
          }
        }
        str = str.replace(key, value)
        result = itr.next()
      }
      return str
    } catch (e) {
      return str
    }
  },
  // Methods
  RunMethod: function (name, data) {
    const method = store.state.logic.method
    if (method.hasOwnProperty(name)) {
      try {
        const dm = new Function('me', 'data', method[name].rule)
        const result = dm(this, data)
        log.MethodRunSuccessfully(name, result)
        return result
      } catch (e) {
        log.MethodGetFailToRun(name, e)
      }
    } else {
      log.MethodNameNotFound(name)
    }
  },

  // Data source
  $updateStaticDatasource: function (obj) {
    const config = obj.datasourceConfig
    try {
      obj.data = config.value
      log.DatasourceUpdatedSuccessfully(obj.name, 'static', obj.data)
      const dm = new Function('data', 'me', obj.updateCallback)
      dm(obj.data, this)
      obj.loading = false
      return true
    } catch (e) {
      log.DatasourceUpdateFail(obj.name, 'static', 'Error')
      obj.loading = false
      return false
    }
  },
  $updateHttpDatasource: function (obj) {
    const config = obj.datasourceConfig
    const me = this
    var HTTP_Config = {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      headers: config.headers,
      params: config.params,
      data: config.data,
      timeout: config.timeout,
      withCredentials: config.withCredentials,
      auth: {
        username: config.authUsername,
        password: config.authPassword
      },
      validateStatus: function (status) {
        return status >= 200 && status < 300 // default
      },
      proxy: {
        host: config.proxyHost,
        port: config.proxyPort,
        auth: {
          username: config.proxyAuthUsername,
          password: config.proxyAuthPassword
        }
      }
    }
    axios(HTTP_Config)
      .then(function (response) {
        obj.data = response.data
        obj.errorMessage = 'NO Error'
        obj.error = false
        obj.lastUpdated = new Date().toISOString()
        log.DatasourceUpdatedSuccessfully(obj.name, 'http', obj.data)
        obj.loading = false
        const dm = new Function('data', 'me', obj.updateCallback)
        dm(obj.data, me)
      })
      .catch(function (error) {
        obj.data = 'No Data'
        obj.error = true
        obj.errorMessage = error
        log.DatasourceUpdateFail(obj.name, 'http', obj.error)
        obj.loading = false
      })
  },
  GetDataSourceData: function (name) {
    const datasource = store.state.logic.datasource
    if (name in datasource) {
      return datasource[name].data
    } else {
      log.InvalidDataSource(name)
    }
  },
  UpdateDataSource: function (name) {
    const datasourceList = store.state.logic.datasource
    if (datasourceList.hasOwnProperty(name)) {
      const datasourceType = datasourceList[name].datasourceType
      datasourceList[name].loading = true
      switch (datasourceType) {
        case 'static': return this.$updateStaticDatasource(datasourceList[name])
        case 'http': return this.$updateHttpDatasource(datasourceList[name])
      }
    } else {
      log.InvalidDataSourceUpdate(name)
    }
  },
  UpdateAllDataSource: function () {
    const allDSList = Object.keys(store.state.logic.datasource)
    for (const i in allDSList) {
      this.UpdateDataSource(allDSList[i])
    }
  },

  // Datasocket
  GetDataSocketData: function (name) {
    const datasockets = store.state.logic.datasocket
    if (name in datasockets) {
      const datasocket = datasockets[name]
      const input = this.GetDataSourceData(datasocket.datasource)
      try {
        const dm = new Function('data', 'me', datasocket.rule)
        const result = dm(input, this)
        log.DatasocketSuccessfullyRun(name)
        return result
      } catch (e) {
        log.DatasocketFailToRun(name, e)
        return null
      }
    } else {
      log.InvalidDatasocket(name)
      return null
    }
  },

  // Form Action
  FormAction: function (body, rule) {
    try {
      const dm = new Function('data', 'me', rule)
      const result = dm(body, this)
      log.FormActionSuccessfully(result)
      return result
    } catch (e) {
      log.FormActionFailed(e)
    }
  },

  // Api
  Api: function (config) {
    return Promise((reslove, reject) => {
      axios(config).then(e => {
        log.ApiCallSuccessfull(config.url, e)
        return reslove(e)
      }).catch(e => {
        log.ApiCallFail(e)
        return reject(e)
      })
    })
  },

  // go to page
  // TODO logic is not clear Yet
  GoToPage: function (page) {
    const AllPages = store.getters.getAllPages
    if (AllPages.indexOf(page) === -1) {
      // logger.$errorLog(`page ${page} does not exist`)
    } else {
      store.state.logic.CurrentPage = page
    }
  },

  // Session
  SetSessionProperty: function (prop, value) {
    if (!('session' in window)) {
      window.session = {}
    }
    window.session[prop] = value
  },
  GetSessionProperty: function (prop) {
    if (!('session' in window)) {
      return null
    }
    return window.session[prop]
  },
  HasSessionProperty: function (prop) {
    if (!('session' in window)) {
      return false
    }
    if (prop in window.session) {
      return true
    }
    return false
  },
  SetCookie (cname, cvalue, exdays = 365) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + btoa(cvalue) + ';' + expires + ';path=/'
  },
  GetCookie (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return atob(c.substring(name.length, c.length))
      }
    }
    return null
  },
  Logger (logdata) {
    log.AddUserLog(logdata)
  }
}
