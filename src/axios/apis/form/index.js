import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 在线预订统计列表
 */
export function getInlineList(data) {
  return axiosUtil.axiosGet(url.FORM + '/inline/page', data);
}
/**
 * 在线预订统计导出
 */
export function exportInlineList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/inline/export', data);
}
/**
 * 人工录入统计列表
 */
export function getHandleList(data) {
  return axiosUtil.axiosGet(url.FORM + '/handle/page', data);
}
/**
 * 人工录入统计导出
 */
export function exportHandleList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/handle/export', data);
}
/**
 * 成人预订单明细列表
 */
export function getAdultList(data) {
  return axiosUtil.axiosGet(url.FORM + '/detail/adult/page', data);
}
/**
 * 成人预订单明细导出
 */
export function exportAdultList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/detail/adult/export', data);
}
/**
 * 儿童预订单明细列表
 */
export function getChildList(data) {
  return axiosUtil.axiosGet(url.FORM + '/detail/child/page', data);
}
/**
 * 儿童预订单明细导出
 */
export function exportChildList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/detail/child/export', data);
}
/**
 * 订单统计表
 */
export function getOrderList(data) {
  return axiosUtil.axiosGet(url.FORM + '/order/page', data);
}
/**
 * 订单统计表导出
 */
export function exportOrderList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/order/export', data);
}
/**
 * 缺苗登记单明细列表
 */
export function getCollectList(data) {
  return axiosUtil.axiosGet(url.FORM + '/detail/collect/page', data);
}
/**
 * 缺苗登记单明细导出
 */
export function exportCollectList(data) {
  return axiosUtil.axiosDownload(url.FORM + '/detail/collect/export', data);
}
/**
 * 接种单位列表接口
 */
export function getOutpatientList(areaCode) {
  return axiosUtil.axiosGet(url.COMMON + '/station/' + areaCode);
}

// 人工统计报表选择接种单位
export function getCommonAreaList(areaCode) {
  return axiosUtil.axiosGet(url.COMMON + '/area/list/' + areaCode);
}