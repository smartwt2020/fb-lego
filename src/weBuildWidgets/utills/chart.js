export const getData = (data, multi, name) => {
  const isA = (e) => Array.isArray(e)
  if (isA(data) && data.length) {
    if (multi) {
      const defaultValue = { name: '', type: 'line', data: [] }
      for (const index in data) {
        data[index] = { ...defaultValue, ...data[index] }
      }
      return data
    } else {
      return [{ name, data }]
    }
  }
  return []
}
