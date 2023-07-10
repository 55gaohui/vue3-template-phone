import http from '@/request/http'
import { ListParams, ListRes, RulesErrDetailParams, RulesErrDetailRes } from './type'
import { useRequestExt } from '@/hooks'
//统一接口管理
enum API {
  //核保规则列表查询
  RULES_LIST = '/rdes/ruleexecutionresult/entryquery',
  // RULES_LIST = '/underwriteRules/executionQuery',
  //规则执行不通过明细查询
  RULES_ERR_DETAIL = '/rdes/ruleexecutiondetail/checkrule'
}
//暴漏请求函数
//核保规则列表查询
export const UnderwritingListRules = (params: Page.ListParams<ListParams>) => {
  return http<Page.ListParams<ListParams>, Page.pageResult<ListRes[]>>(API.RULES_LIST, {
    method: 'POST',
    data: params
  })
}
export const useUnderwritingRulesList = (params: Page.ListParams<ListParams>) => {
  return useRequestExt(UnderwritingListRules, {
    debounceWait: 500,
    defaultParams: [params]
  })
}
//规则执行不通过明细查询
export const RulesErrDetail = (params: RulesErrDetailParams) => {
  return http<RulesErrDetailParams, Page.pageResult<RulesErrDetailRes[]>>(API.RULES_ERR_DETAIL, {
    method: 'POST',
    data: params
  })
}
