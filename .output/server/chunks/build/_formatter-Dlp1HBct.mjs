const __unimport_$formatter = () => {
  const truncateText = (text, limit = 90) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}\u2026`;
  };
  const date = (value, format = "YYYY-MM-DD HH:mm") => {
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d.getTime())) return "";
    const pad = (n) => n.toString().padStart(2, "0");
    const map = {
      YYYY: d.getFullYear(),
      MM: pad(d.getMonth() + 1),
      DD: pad(d.getDate()),
      HH: pad(d.getHours()),
      mm: pad(d.getMinutes()),
      ss: pad(d.getSeconds())
    };
    let result = format;
    Object.keys(map).forEach((k) => {
      result = result.replace(k, map[k]);
    });
    return result;
  };
  function formatVNTime(ts) {
    const date2 = new Date(ts);
    const days = ["Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\xE1u", "Th\u1EE9 B\u1EA3y"];
    const dayName = days[date2.getDay()];
    const day = String(date2.getDate()).padStart(2, "0");
    const month = String(date2.getMonth() + 1).padStart(2, "0");
    const year = date2.getFullYear();
    const hours = String(date2.getHours()).padStart(2, "0");
    const minutes = String(date2.getMinutes()).padStart(2, "0");
    return `${dayName}, ${day}/${month}/${year} - ${hours}:${minutes}`;
  }
  return {
    truncateText,
    date,
    formatVNTime
  };
};

export { __unimport_$formatter as _ };
//# sourceMappingURL=_formatter-Dlp1HBct.mjs.map
