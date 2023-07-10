import { UseRequestService, UseRequestOptions } from 'vue-hooks-plus/lib/useRequest/types'
import { showLoadingFun, hideLoadingFun } from '@/utils/tools'
//封装useRequest  增加loading遮罩层
const useRequestExt = <TData, TParams extends unknown[], TPlugin>(
  service: UseRequestService<TData, TParams>,
  params: UseRequestOptions<TData, TParams, TPlugin> | undefined
) => {
  return useRequest(service, {
    ...params,
    onBefore() {
      showLoadingFun()
    },
    onFinally() {
      hideLoadingFun()
    }
  })
}
export default useRequestExt
