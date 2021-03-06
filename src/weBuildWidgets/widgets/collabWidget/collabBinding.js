import { camelCase } from 'lodash'

const componentPropertyMap = {
  body: {
    fbWidgetLabel: ['value'],
    fbWidgetButton: ['value'],
    fbWidgetIcon: ['value'],
    fbWidgetImage: ['src'],
    fbWidgetKpiCard: ['title.value', 'subtitle.value', 'value.value', 'footer.value'],
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
    fbWidgetDonutChart: ['show'],
    fbWidgetDataTable: ['show']
  },
  datasocket: {
    fbWidgetKpiCard: ['datasocket'],
    fbWidgetLineChart: ['datasocket'],
    fbWidgetAreaChart: ['datasocket'],
    fbWidgetBarChart: ['datasocket'],
    fbWidgetPieChart: ['datasocket'],
    fbWidgetDonutChart: ['datasocket'],
    fbWidgetDataTable: ['datasocket']
  }
}

const getProperty = function (obj, query) {
  return query.split('.').reduce((p, c) => (p && p[c]) || '', obj)
}
const setProperty = (object, path, value) => path
  .split('.')
  // eslint-disable-next-line no-return-assign
  .reduce((o, p, i) => o[p] = path.split('.').length === ++i ? value : o[p] || {}, object)

const bodyBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.body[comp] || []
  const body = propMap.body || {}
  props.forEach(e => {
    let str = getProperty(config, e)
    const itr = str.matchAll('{{.*?}}')
    let result = itr.next()
    while (!result.done) {
      // get the regex match
      const key = result.value[0]
      const value = body[key.slice(2, -2).trim()]
      str = str.replace(key, value)
      result = itr.next()
    }

    setProperty(config, e, str)
  })
  return config
}

const propertyBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.property[comp] || []
  const property = propMap.property || []
  props.forEach(e => {
    setProperty(config, e, property[getProperty(config, e)] || '')
  })
  return config
}

const datasocketBinding = function (config, propMap, comp) {
  const props = componentPropertyMap.datasocket[comp] || []
  const datasocket = propMap.datasocket || []
  props.forEach(e => {
    setProperty(config, e, datasocket[getProperty(config, e)] || '')
  })
  return config
}

const eventBinding = function (config, propMap) {
  const events = propMap.events || {}
  for (const event in config.events) {
    config.events[event] = events[config.events[event]]
  }
  return config
}

const collabBinding = function (config, propMap) {
  const componentName = camelCase(config.component)
  return bodyBinding(
    propertyBinding(
      datasocketBinding(
        eventBinding(config, propMap),
        propMap, componentName),
      propMap, componentName),
    propMap, componentName)
}

export default collabBinding
