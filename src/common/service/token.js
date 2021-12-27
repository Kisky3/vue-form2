import axios from 'axios'
export const getToken = () => {
  return axios.get('https://form.jp/form/csrftoken')
}
