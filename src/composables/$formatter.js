
export default () => {

  const truncateText = (text, limit = 90) => {
    if (!text) return ''
    if (text.length <= limit) return text
    return `${text.slice(0, limit)}…`
  }

  
  return {
    truncateText  }
}