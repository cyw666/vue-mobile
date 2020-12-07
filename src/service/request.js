import axios from 'axios'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/token'
import router from '@/router'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '/api/v1',
  withCredentials: true,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const accessToken = getToken()
    // 过滤get请求空的值
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const { data } = response
    return Promise.resolve(data)
  },
  err => {
    if (err.response) {
      err.response.data =
        typeof err.response.data === 'object' ? err.response.data : {}
      const errorData = err.response.data
      if (!errorData.message) {
        errorData.message = err.response.statusText
      }
      if (err.response.status === 401 || errorData.status === 403) {
        removeToken()
        // Redirect to login page or somewhere.
        router.push('/login')
      }
      Toast(errorData.message || '连接失败，请检查网络并重试。')
      return Promise.reject(errorData)
    } else {
      return Promise.reject(err)
    }
  }
)

export default service
