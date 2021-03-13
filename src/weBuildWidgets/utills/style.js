const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter
  }).join('')
}

export const CreateStyle = (id) => {
  let styleElement = document.getElementById(`style-${id}`)
  if (styleElement === null) {
    styleElement = document.createElement('style')
    styleElement.setAttribute('id', `style-${id}`)
    document.body.append(styleElement)
  }
  return styleElement
}

export const JsonToCss = (selector = '', json = {}, base = '') => {
  if (!selector.length) {
    return base
  } else {
    let css = base + ' ' + selector + '{'

    for (const jsonCss in json) {
      css += `${kebabize(jsonCss)}: ${json[jsonCss]};`
    }
    css += '}'
    return css
  }
}
