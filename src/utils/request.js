import axios from 'axios'
const request = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'XMLHttpRequest'}
})
// ['Content-Type'] = 'application/x-www-form-urlencoded'
function responseHandler (response) {
  const { authorization } = response.headers
  if (authorization) {
    localStorage.setItem('Token', `${authorization}`)
  }
  return response.data
}
function responseErrorHandler (error) {
  const status = error.response.status
  if (status === 500 || status === 403) {
    localStorage.removeItem('Token')
    location.href = 'http://localhost:8082'
  }
}
function requestProcessor (request) {
  const token = localStorage.getItem('Token')
  // request.headers['authorization'] = ''
  request.headers['authorization'] = token
  return request
}
function commonErrorHandler (e) {
  return Promise.reject(e)
}
// Request interceptor
request.interceptors.request.use(requestProcessor, commonErrorHandler)
// Response interceptor
request.interceptors.response.use(responseHandler, responseErrorHandler)

export default request
