import { camelCase } from 'lodash'

const componentPropertyMap = {
  valueString: {
    fbWidgetLabel: ['value'],
    fbWidgetButton: ['value'],
    fbWidgetIcon: ['value'],
    fbWidgetImage: ['src'],
    fbWidgetKpiCard: ['title.value', 'subtitle.value', 'value.value', 'header.value'],
    fbWidgetLink: ['value']
  },
  property: {
    fbWidgetLabel: ['show'],
    fbWidgetParagraph: ['show'],
    fbWidgetHtml: ['show'],
    fbWidgetIcon: ['show'],
    fbWidgetLink: ['show'],
    fbWidgetButton: ['show'],
    fbWidgetImage: ['show'],
    fbWidgetInput: ['show', 'bindProperty'],
    fbWidgetTextarea: ['show', 'bindProperty'],
    fbWidgetSwitch: ['show', 'bindProperty'],
    fbWidgetCheckbox: ['show', 'bindProperty'],
    fbWidgetSelect: ['show', 'bindProperty'],
    fbWidgetKpiCard: ['show'],
    fbWidgetLineChart: ['show'],
    fbWidgetAreaChart: ['show'],
    fbWidgetBarChart: ['show'],
    fbWidgetPieChart: ['show'],
    fbWidgetDonutChart: ['show']
  },
  datasocket: {
    fbWidgetKpiCard: ['datasocket'],
    fbWidgetLineChart: ['datasocket'],
    fbWidgetAreaChart: ['datasocket'],
    fbWidgetBarChart: ['datasocket'],
    fbWidgetPieChart: ['datasocket'],
    fbWidgetDonutChart: ['datasocket']
  }
}

const getProperty = function (obj, query) {
  return query.split('.').reduce((p, c) => (p && p[c]) || null, obj)
}
const setProperty = function (obj, query, value) {
  query.split('.').reduce((o, p, i) => { o[p] = query.split('.').length === ++i ? value : o[p] || {} }, obj)
}

const valueStringBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.valueString[comp] || []
  props.forEach(e => {
    let str = getProperty(config, e)
    const itr = str.matchAll('{{.*?}}')
    let result = itr.next()
    while (!result.done) {
      // get the regex match
      const key = result.value[0]
      const value = propMap.property[key.slice(2, -2).trim()]
      str = str.replace(key, value)
      result = itr.next()
    }

    setProperty(config, e, str)
  })
  return config
}

const propertyBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.property[comp] || []
  props.forEach(e => {
    setProperty(config, e, propMap.property[getProperty(config, e)] || '')
  })
  return config
}

const datasocketBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.datasocket[comp] || []
  props.forEach(e => {
    setProperty(config, e, propMap.datasocket[getProperty(config, e)] || '')
  })
  return config
}

const eventBinding = function (config, propMap) {
  for (const event in config.events) {
    config.events[event] = propMap.events[config.events[event]]
  }
  return config
}

const collabBinding = function (config, propMap) {
  const componentName = camelCase(config.component)
  return valueStringBinding(
    propertyBinding(
      datasocketBinding(
        eventBinding(config, propMap),
        propMap, componentName),
      propMap, componentName),
    propMap, componentName)
}

export default collabBinding