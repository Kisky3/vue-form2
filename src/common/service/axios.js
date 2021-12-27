import axios from 'axios'
import 'url-search-params-polyfill'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 30000
}

export const get = (url, paramsData = null) => {
  const params = new URLSearchParams()
  if (paramsData)
    Object.keys(paramsData).forEach(key => params.append(key, paramsData[key]))
  return axios.get(url, params, config)
}

export const post = (url, formData) => {
  const params = new URLSearchParams()
  Object.keys(formData).forEach(key => params.append(key, formData[key]))
  return axios.post(url, params, config)
}

export const put = (url, paramsData = null) => {
  const params = new URLSearchParams()
  if (paramsData)
    Object.keys(paramsData).forEach(key => params.append(key, paramsData[key]))
  return axios.put(url, params, config)
}
