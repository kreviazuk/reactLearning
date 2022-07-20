import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 获取订单列表
 */
export function getQyOrderList(data) {
  return axiosUtil.axiosGet(url.QY_ORDER, data);
}

/**
 * 获取订单列表
 */
export function queryQyOrder(id, data) {
  return axiosUtil.axiosGet(url.QY_ORDER + id, data);
}

/**
 * 确认/拒绝
 */
export function handlerQyOrder(data) {
  return axiosUtil.axiosPut(url.QY_ORDER + "/info", data);
}

/**
 * 发货
 */
export function sendQyOrder(data) {
  return axiosUtil.axiosPut(url.QY_ORDER, data);
}

/**
 * 发货历史
 */
export function qyOrderHistory(orderNo) {
  return axiosUtil.axiosGet(url.QY_ORDER + `${orderNo}`);
}

/**
 * 查看订单详情
 */
export function qyOrderDetail(orderNo) {
  return axiosUtil.axiosGet(url.QY_ORDER + `info/${orderNo}`);
}

/**
 * 导出excel
 */
export function exportExcel(data) {
  return axiosUtil.axiosDownload(url.QY_ORDER + "export", data);
}
