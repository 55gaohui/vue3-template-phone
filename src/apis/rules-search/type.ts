export type ListRes = {
  id: number
  name: string
  ID_No: string
  phone: string
  order_no: string
}
export interface ListParams {
  appName?: string
  appIdno?: string
  appPhone?: string
  contno?: string
}
export interface RulesErrDetailParams {
  contno: string
}
export interface RulesErrDetailRes {
  saleChannel: string //销售渠道
  contsource: string //数据来源
  selltype: string //销售类型
  appName: string //投保人姓名
  appIdno: string //投保人证件号
  appPhone: string //投保人电话
  contno: string //保单号
  ruleCode: string //规则编码
  ruleResultdesc: string ////规则描述
  status: string //状态
  created: string //开始时间
  modified: string //结束时间
}
