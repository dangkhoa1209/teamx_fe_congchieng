
export default () => {

  const truncateText = (text, limit = 90) => {
    if (!text) return ''
    if (text.length <= limit) return text
    return `${text.slice(0, limit)}…`
  }
  
  const date = (value, format = 'YYYY-MM-DD HH:mm') => {
  if (!value) return ''

  const d = new Date(value)
  if (isNaN(d.getTime())) return '' // invalid date

  const pad = (n) => n.toString().padStart(2, '0')

  const map = {
    YYYY: d.getFullYear(),
    MM: pad(d.getMonth() + 1),
    DD: pad(d.getDate()),
    HH: pad(d.getHours()),
    mm: pad(d.getMinutes()),
    ss: pad(d.getSeconds())
  }

  let result = format
  Object.keys(map).forEach(k => {
    result = result.replace(k, map[k])
  })

  return result
}

  return {
    truncateText ,
    date
  }
}