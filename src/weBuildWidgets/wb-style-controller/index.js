import { JsonToCss, addMarginStyle } from './utils'

const generalCssConverter = (element) => {
  let css = ''
  const id = `#${element.id}`
  const sudoStyle = element.sudoStyle || {}
  css = JsonToCss(id, { ...element.style, ...element.addOnStyle }, css)
  for (const sudoClass in sudoStyle) {
    css = JsonToCss(`${id}:${sudoClass}`, sudoStyle[sudoClass], css)
  }
  return css
}

const kpiCardCssConverter = (element) => {
  let css = ''
  const id = `#${element.id}`
  element.card.style = addMarginStyle(element.card.style)
  css = JsonToCss(id, element.card.style, css)
  css = JsonToCss(`${id}-title`, element.title.style, css)
  css = JsonToCss(`${id}-subtitle`, element.subtitle.style, css)
  css = JsonToCss(`${id}-value`, element.value.style, css)
  css = JsonToCss(`${id}-footer`, element.footer.style, css)

  const sudoStyle = element.sudoStyle || {}
  for (const sudoClass in sudoStyle) {
    css += this.JsonToCss(`${id}:${sudoClass}`, sudoStyle[sudoClass], css)
  }

  return css
}

const dataTableCssConverter = (element) => {
  let css = ''
  const id = `#${element.id}`
  element.style.table = addMarginStyle(element.style.table)
  css = JsonToCss(id, element.style.table, css)
  css = JsonToCss(`${id} td`, element.style.td, css)
  css = JsonToCss(`${id} th`, element.style.th, css)
  return css
}

const iteratorCssConverter = (element) => {
  let css = ''
  const id = `#${element.id}`
  const iteratorContainer = `#${element.id} .iterator-widget__container`
  const childClass = `.${element.id}-collab`
  css = JsonToCss(id, element.style, css)
  css = JsonToCss(iteratorContainer, element.flexConfig, css)
  css = JsonToCss(childClass, element.childrenStyle, css)
  return css
}

export const generateComponentCss = (element) => {
  const component = element.component
  let css = ''
  switch (component) {
    case 'fb-widget-area-chart':
    case 'fb-widget-bar-chart':
    case 'fb-widget-donut-chart':
    case 'fb-widget-html':
    case 'fb-widget-form':
    case 'fb-widget-image':
    case 'fb-widget-iframe':
    case 'fb-widget-youtube':
    case 'fb-widget-line-chart':
    case 'fb-widget-paragraph':
    case 'fb-widget-pie-chart':
    case 'fb-widget-textarea':
    case 'fb-widget-collab-widget':
    case 'fb-widget-label':
    case 'fb-widget-button':
    case 'fb-widget-checkbox':
    case 'fb-widget-icon':
    case 'fb-widget-input':
    case 'fb-widget-link':
    case 'fb-widget-select':
    case 'fb-widget-switch':
    case 'fb-widget-modal':
      element.style = addMarginStyle(element.style)
      css = generalCssConverter(element)
      break
    case 'fb-widget-container':
      css = generalCssConverter(element)
      break
    case 'fb-widget-kpi-card':
      css = kpiCardCssConverter(element)
      break
    case 'fb-widget-data-table':
      css = dataTableCssConverter(element)
      break
    case 'fb-widget-iterator':
      css = iteratorCssConverter(element)
      break
  }
  return css + element.staticStyle
}
