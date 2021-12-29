/* eslint-disable */
let url
export const env = process.env.VUE_APP_ENV
export const nodeenv = process.env.NODE_ENV
if (env === 'production' && nodeenv === 'production') {
  url = 'https://form.jp/'
} else if (env === 'staging' && nodeenv === 'production') {
  url = 'https://stg.jp/'
} else if (env === 'development') {
  url = 'https://dev.jp/'
} else if (env === 'test') {
  url = ''
} else {
  url = 'https://localhost:8080/'
}
export const Path = url
