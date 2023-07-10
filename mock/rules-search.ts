import { MockMethod } from 'vite-plugin-mock'
function createList(appName) {
  const data = [
    {
      id: 1,
      appName: '张三',
      appIdno: '513436198110279573',
      appPhone: '15953545651',
      contno: '156156156156156'
    },
    {
      id: 2,
      appName: '张强',
      appIdno: '810000199408230021',
      appPhone: '18953545568',
      contno: '156156156156156'
    },
    {
      id: 3,
      appName: '王礼',
      appIdno: '513436195510199077',
      appPhone: '13553545651',
      contno: '156156156156156'
    },
    {
      id: 4,
      appName: '赵青松',
      appIdno: '110101200101010034',
      appPhone: '15953544551',
      contno: '156156156156156'
    }
  ]
  return data.filter((v) => {
    return v.appName.includes(appName)
  })
}
// 对外暴漏 接口数组

export default [
  //核保规则查询
  {
    url: '/api/rdes/ruleexecutionresult/entryquery',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        data: {
          total: 56,
          rows: createList(body.params.appName || '')
        },
        msg: '请求成功'
      }
    }
  },
  //规则执行不通过明细查询
  {
    url: '/api/rdes/ruleexecutiondetail/checkrule',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          total: 56,
          rows: [
            {
              saleChannel: '04', //销售渠道
              contsource: '000', //数据来源
              selltype: '16', //销售类型
              appName: '黄晶', //投保人姓名
              appIdno: '460030199308160014', //投保人证件号
              appPhone: '18889959697', //投保人电话
              insuName: '黄晶', //被保人姓名
              insuIdno: '460030199308160014', //被保人证件号
              contno: '880500000514142', //保单号
              ruleCode: 'Intel000209', //规则编码
              ruleResultdesc:
                '违反互联网人身险保额校验规则，被保人属于三类地区，累计净人身风险保额3550000，超过100万限额，自核不予通过。', //规则描述
              created: '2020-08-25 10:23:37', //开始时间
              modified: '2020-08-25 10:23:37' //结束时间
            }
          ]
        },
        msg: '请求成功'
      }
    }
  }
] as MockMethod[]
