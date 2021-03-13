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
