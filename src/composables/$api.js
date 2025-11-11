import { isRef, isReactive, toRaw } from 'vue'
import isNil from 'lodash-es/isNil'
import { decode } from '../ utils/str.js'

const reformatUrl = (url, options = {}) => {
  const uriParams = options.uriParams || {}
  const queryParams = options.query || {}

  if (uriParams) {
    if (url.startsWith('/')) {
      url = url.substring(1)
    }
    Object.keys(uriParams).forEach((key) => {
      const value = encodeURIComponent(uriParams[key])
      url = url.replace(key, value)
    })
  }

  if (Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams).toString()
    url += (url.includes('?') ? '&' : '?') + queryString
  }

  return url
}

const setKeyOptions = (options = {}, url) => {
  options.key = +new Date() + url
}

const setCacheOptions = (options = {}, value) => {
  options.initialCache = value
}

const errorProcess = (app, error) => {
  if (process.client) {
    let errorDataList = []
    if (error && error.value) {
      const errorData = error.value.data || {}      
      errorDataList = errorData.errors ? Array(errorData.errors) : errorData.errors
      if (typeof errorDataList === 'string') {
        $toast().error(errorDataList)
        return
      }

      if (Array.isArray(errorDataList) && errorDataList.length) {
        errorDataList.forEach((msg) => {
          if (Array.isArray(msg) && msg.length) {
            msg.forEach((m) => handleToastError(m))
            return
          }
          handleToastError(msg)
        })
      } else {
        $toast().error('Lỗi kết nối máy chủ')
      }
    }
  }
}

const handleToastError = (msg) => {
  if (Array.isArray(msg)) {
    msg.forEach((m) => handleToastError(m))
    return
  }

  if (typeof msg === 'string') {
    $toast().error(decode(msg))
  }
  if (typeof msg === 'object' && 'msg' in msg) {
    $toast().error(String(msg.msg))
  }
  if (typeof msg === 'object' && 'message' in msg) {
    $toast().error(msg.message)
  }
}

const disableReactive = (data) => {
  if (data instanceof FormData) return data
  if (Array.isArray(data)) return data.map((d) => disableReactive(d))

  if (typeof data === 'object' && data !== null) {
    data = { ...toRaw(data) }
    Object.keys(data).forEach((key) => {
      if (!(data[key] instanceof URLSearchParams || data[key] instanceof FormData)) {
        const raw = toRaw(data[key])
        if (Array.isArray(raw)) {
          data[key] = raw.map((o) => disableReactive(o))
        } else if (raw !== null && typeof raw === 'object') {
          data[key] = { ...disableReactive(raw) }
        } else {
          data[key] = raw
        }
      }
    })
    return data
  }

  if (isReactive(data) || isRef(data)) {
    return toRaw(data)
  }

  return data
}

export default async function $api(source, options = {}, showError = true) {
  const app = useNuxtApp()
  const config = useRuntimeConfig().public
  const { auth } = $store()
  const router = useRouter()

  const accessToken = auth?.accessToken
  const requestHeaders = {
    Authorization: accessToken ? 'Bearer ' + accessToken : '',
    'Accept-Language': 'vi',
    ...options.headers
  }

  if (isNil(options.initialCache)) {
    setCacheOptions(options, false)
  }

  options = disableReactive(options)

  try {
    if (typeof source === 'string') {
      setKeyOptions(options, reformatUrl(source, options))
      const response = await useFetch(reformatUrl(source, options), {
        baseURL: config.apiURL,
        headers: requestHeaders,
        ...options
      })

      if (response.status.value === 'error') {
        const errorResponse = (response.error && response.error.value) || {}
        const errorStatus = errorResponse.statusCode || 500

        if (errorStatus === 401) {
          auth?.clear?.()
          router.push({ name: 'auth-login' })
          return null
        }

        showError && errorProcess(app, response.error)
        Object.assign(response, {
          data: ref(response?.error?.value?.data)
        })
        return response
      }

      return response
    }

    const { method, url, headers } = source
    setKeyOptions(options, reformatUrl(url, options))

    const opts = {
      onResponse({ response }) {
        response._data.headers = response.headers
        return response._data
      },
      baseURL: config.apiURL,
      headers: {
        ...headers,
        ...requestHeaders
      },
      ...options,
      method
    }

    const response = await useFetch(reformatUrl(url, options), opts)

    const errorResponse = (response.error && response.error.value) || {}
    const errorStatus = errorResponse.statusCode || 500

    if (errorStatus === 401) {
      auth?.clear?.()
      router.push({ name: 'auth-login' })
      return null
    }

    if (response.status.value === 'error') {
      showError && errorProcess(app, response.error)
      Object.assign(response, {
        data: ref(response?.error?.value?.data)
      })
      return null
    }

    return response
  } catch (e) {
    console.log('e', e);
    $toast().error(e.message || 'Lỗi kết nối máy chủ')
    throw e
  }
}
