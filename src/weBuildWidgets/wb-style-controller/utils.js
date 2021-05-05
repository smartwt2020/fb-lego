const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter
  }).join('')
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

export const addMarginStyle = function (style) {
  if (style && style.margin) {
    const m = style.margin.split(' ')
    var height = '100%'
    var width = '100%'
    if (m.length === 1) {
      height = `calc(100% - ${m[0]} - ${m[0]} )`
      width = `calc(100% - ${m[0]} - ${m[0]} )`
    } else if (m.length === 4) {
      height = `calc(100% - ${m[0]} - ${m[2]} )`
      width = `calc(100% - ${m[1]} - ${m[3]} )`
    }
    style.height = height
    style.width = width
    return style
  }
  return style
}
