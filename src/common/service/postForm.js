import axios from 'axios'
import 'url-search-params-polyfill'
export const postForm = formData => {
  const params = new URLSearchParams()
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 30000
  }
  Object.keys(formData).forEach(key => params.append(key, formData[key]))
  // eslint-disable-next-line no-console
  console.log(params)
  const url = `https://form.jp/form/${formData.contents_key}/`
  return axios.post(url, params, config)
}

export const post = (url, formData) => {
  const params = new URLSearchParams()
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 30000
  }
  Object.keys(formData).forEach(key => params.append(key, formData[key]))
  return axios.post(url, params, config)
}
