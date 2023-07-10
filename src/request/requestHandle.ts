import { InternalAxiosRequestConfig } from 'axios'
export const handleRequestHeader = (config: InternalAxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json'
  return config
}
// 通过判断是否存在 token 判断用户登陆情况
// 即使 token 存在， 也有可能 token 过期，所需需要在每次的请求头中携带 token, 让后端根据 token 判断用户登陆情况，并返回我们对应的状态码
export const handleAuth = (config: InternalAxiosRequestConfig) => {
  config.headers['token'] = localStorage.getItem('token') || ''
  return config
}
