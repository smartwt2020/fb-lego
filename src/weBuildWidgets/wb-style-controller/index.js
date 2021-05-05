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
    case 'fb-widget-line-chart':
    case 'fb-widget-paragraph':
    case 'fb-widget-pie-chart':
    case 'fb-widget-textarea':
      element.style = addMarginStyle(element.style)
      css = generalCssConverter(element)
      break
    case 'fb-widget-label':
    case 'fb-widget-button':
    case 'fb-widget-checkbox':
    case 'fb-widget-container':
    case 'fb-widget-icon':
    case 'fb-widget-input':
    case 'fb-widget-link':
    case 'fb-widget-select':
    case 'fb-widget-switch':
      css = generalCssConverter(element)
      break
    case 'fb-widget-kpi-card':
      css = kpiCardCssConverter(element)
      break
  }
  return css + element.staticStyle
}
