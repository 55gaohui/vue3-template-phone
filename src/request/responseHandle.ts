import { ElMessage } from 'element-plus'
import { IResponse } from './type'
export const handleNetworkError = (res?: IResponse) => {
  if (res?.code !== 0) {
    ElMessage({
      type: 'error',
      message: res?.msg
    })
  }
}
