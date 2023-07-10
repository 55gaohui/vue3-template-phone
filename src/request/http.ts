import { AxiosResponse } from 'axios'
import Request from './axios'
import { TIMEOUT } from '@/config/index'
import { IResponse, IRequestConfig } from './type'

const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      return config
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    }
  }
})
/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {IRequestConfig} config
 * @returns {Promise}
 */
const http = <D = any, T = any>(url: string, config: IRequestConfig<D, T>) => {
  return request.request<IResponse<T>>({ ...config, url })
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default http
