import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryPurchase(data) {
  return axiosUtil.axiosGet(url.PURCHASE_ORDER + "/", data);
}
/**
 * 查询待采购需求列表
 */
export function queryReadyForPurchaseDemands(data) {
  return axiosUtil.axiosGet(url.PURCHASE_ORDER + "/plan/list", data);
}

// 查询投标企业列表
export function getCompany() {
  return axiosUtil.axiosGet(url.PURCHASE_ORDER + "/tbqy");
}

/**
 * 新建采购单
 */
export function createdPurchase(data) {
  return axiosUtil.axiosPost(url.PURCHASE_ORDER + "/", data);
}
/**
 * 编辑采购单
 */
export function updatePurchase(data) {
  return axiosUtil.axiosPut(url.PURCHASE_ORDER + "/", data);
}
/**
 * 查看采购单详情
 */
export function purchaseDetail(purchaseNo) {
  return axiosUtil.axiosGet(url.PURCHASE_ORDER + `/${purchaseNo}`);
}
/**
 * 导出采购单
 */
export function exportPurchaseList(data) {
  return axiosUtil.axiosDownload(url.PURCHASE_ORDER + "/export", data);
}
/**
 * 导出采购单详情
 */
export function exportPurchaseDetail(purchaseNo) {
  return axiosUtil.axiosDownload(url.PURCHASE_ORDER + `/export/${purchaseNo}`);
}
/**
 * 删除单条采购单
 */
export function deletePurchase(purchaseNo) {
  return axiosUtil.axiosDelete(url.PURCHASE_ORDER + `/${purchaseNo}`);
}
/**
 * 批量删除采购单
 */
export function batchDeletePurchase(ids) {
  return axiosUtil.axiosDelete(url.PURCHASE_ORDER + "/", ids);
}
/**
 * 确认采购
 */
export function confirmPurchase(no) {
  return axiosUtil.axiosPut(url.PURCHASE_ORDER + `/${no}`);
}
/**
 * 查询合同编号是否唯一
 */
export async function checkHeTongNo(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/heTong", data)
    .catch((err) => err);
}
// 确认采购前验证
export function checkPurches(pucharseNo) {
  return axiosUtil.axiosGet(url.PURCHASE_ORDER + `/check/${pucharseNo}`);
}
