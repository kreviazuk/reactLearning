// const BASE_URL = process.env.VUE_APP_BASE_URL;
const SOCKET_URL = process.env.VUE_APP_SOCKET_URL;
console.log('url地址')
console.log(process.env.NODE_ENV)
//配置baseUrl
let BASE_URL = ''
if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://221.224.159.213:9999/unImmunePlan'
}
//eslint-disable-next-line
export default {
  /** 登录登出 */
  TEMPORARY_TOKEN: BASE_URL + "/ss/token", // 获取临时token 
  LOGIN: BASE_URL + "/ss/login",
  LOGOUT: BASE_URL + "/ss/logout",
  /** 角色管理 */
  ROLE: BASE_URL + "/sys/role",
  /** 用户管理 */
  USER: BASE_URL + "/sys/user",
  /** 投标企业 */
  TBQY: BASE_URL + "/sys/tbqy/",
  /** 支付设置 */
  PAY: BASE_URL + "/sys/pay",
  // 消息接口
  MESSAGE: BASE_URL + "/sys/message",
  /** 修改密码 */
  UPDATE_PASS: BASE_URL + "/common/user/passUpdate",
  /** 忘记密码 */
  SEND_VALID: BASE_URL + "/common/validReset",
  RESET_PASS: BASE_URL + "/common/passReset",
  // 通用接口
  COMMON: BASE_URL + "/common",
  // 通用树接口
  COMMON_TREE: BASE_URL + "/common/tree/area",
  COMMON_TREE_USER: BASE_URL + "/common/tree/area/user",
  COMMON_TREE_MODULE: BASE_URL + "/common/tree/module",
  // 通用校验接口
  COMMON_CHECK: BASE_URL + "/check/isExist",
  // 通用列表接口
  COMMON_LIST: BASE_URL + "/common/condition/list",
  // 疫苗大类
  // 接种单位需求管理接口
  OUTPATIENT_DEMAND: BASE_URL + "/plan/mz",
  // 区疾控需求管理接口
  DESEASE_CONTROL_DEMAND: BASE_URL + "/plan/jk",
  // 企业订单查询
  QY_ORDER: BASE_URL + "/order/qy/",
  // 采购接口
  PURCHASE_ORDER: BASE_URL + "/order/user",
  // 结算接口
  PREPORT_ORDER: BASE_URL + "/report",
  // 合同接口
  CONTRACT: BASE_URL + "/contract/",
  // 报表接口
  FORM: BASE_URL + "/form",
  // websocket接口
  SOCKET:SOCKET_URL + "/socket"
};
