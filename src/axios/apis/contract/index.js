import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 获取合同列表
 */
export function getContractList(data) {
  return axiosUtil.axiosGet(url.CONTRACT, data);
}

/**
 * 新建合同
 */
export function createdContract(data) {
  return axiosUtil.axiosPost(url.CONTRACT, data);
}
/**
 * 编辑合同
 */
export function updateContract(data) {
  return axiosUtil.axiosPut(url.CONTRACT, data);
}
/**
 * 删除合同
 */
export function deleteContract(contractId) {
  return axiosUtil.axiosDelete(url.CONTRACT + contractId);
}
/**
 * 删除合同
 */
export function deleteContractMulti(data) {
  return axiosUtil.axiosDelete(url.CONTRACT, data);
}

/**
 * 查看合同详情
 */
export function contractDetail(contractNo) {
  return axiosUtil.axiosGet(url.CONTRACT + `${contractNo}`);
}

/**
 * 查询未绑定合同采购单
 */
export function unbindedOrderList(data) {
  return axiosUtil.axiosGet(url.CONTRACT + "purchase", data);
}
/**
 * 解绑采购单
 */
export function handleUnbindedOrder(id) {
  return axiosUtil.axiosDelete(url.CONTRACT + `order/${id}`);
}

/**
 * 导出excel
 */
export function exportExcel(data) {
  return axiosUtil.axiosDownload(url.CONTRACT + "export", data);
}
/**
 * 上传附件
 */
export function uploadFile(data) {
  return axiosUtil.axiosPost(url.CONTRACT + "upload/file", {}, data);
}
/**
 * 查询合同编号是否唯一
 */
export async function checkHeTongNo(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/heTong", data)
    .catch((err) => err);
}
