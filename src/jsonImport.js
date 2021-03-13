
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
window.wbWidgetJson = {}
window.wbWidgetsList = []
const requiredjson = require.context('./weBuildWidgets/json', true, /\.json$/)
requiredjson.keys().forEach(fileName => {
  // get component config
  const componentConfig = requiredjson(fileName)
  fileName = fileName.split('/').pop()
  // get pascal case name of component's
  let componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  // register component
  componentName = 'wbWidget' + componentName
  window.wbWidgetsList.push(componentName)
  window.wbWidgetJson[componentName] = componentConfig
})
