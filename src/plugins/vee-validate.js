import { defineRule, configure } from 'vee-validate'
import * as rules from '@vee-validate/rules'

export default defineNuxtPlugin(() => {
  Object.entries(rules).forEach(([r, v]) => {
    if (typeof v === 'function') {
      defineRule(r, v)
    }
  })

  configure({
    generateMessage: (ctx) => {
      const field = ctx.label || ctx.field || 'Trường này'
      const params = ctx.rule?.params      

      const messages= {
        required: `${field} là bắt buộc`,
        email: `${field} phải là email hợp lệ`,
        min: `${field} phải có ít nhất ${params ? params[0] : ''} ký tự`,
        max: `${field} tối đa ${params ? params[0] : ''} ký tự`,
        min_value: `${field} phải lớn hơn hoặc bằng ${params ? params[0] : ''}`,
        max_value: `${field} phải nhỏ hơn hoặc bằng ${params ? params[0] : ''}`,
        numeric: `${field} phải là số`,
        alpha: `${field} chỉ được chứa chữ cái`,
        alpha_num: `${field} chỉ được chứa chữ cái và số`,
        confirmed: `${field} không trùng khớp`,
        regex: `${field} không hợp lệ`,
        url: `${field} phải là đường dẫn hợp lệ`
      }

      return messages[ctx.rule.name] || `${field} không hợp lệ`
    }
  })
})