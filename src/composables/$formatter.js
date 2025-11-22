
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

  function formatVNTime(ts) {
    const date = new Date(ts);

    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = days[date.getDay()];

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dayName}, ${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  return {
    truncateText ,
    date,
    formatVNTime
  }
}