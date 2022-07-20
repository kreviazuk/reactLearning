import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 新增需求计划
 */
export function addDemand(data) {
  return axiosUtil.axiosPost(url.DESEASE_CONTROL_DEMAND + "/save", data);
}
/**
 * 编辑需求计划
 */
export function updateDemand(data) {
  return axiosUtil.axiosPut(url.DESEASE_CONTROL_DEMAND + "/update", data);
}
/**
 * 查询所有
 */
export function queryDemands(data) {
  return axiosUtil.axiosGet(url.DESEASE_CONTROL_DEMAND + "/list/page", data);
}
/**
 * 查询需求信息
 */
export function queryDemandDetail(planNo) {
  return axiosUtil.axiosGet(url.DESEASE_CONTROL_DEMAND + `/info/${planNo}`);
}
/**
 * 删除需求信息
 */
export function deleteDemand(planNo) {
  return axiosUtil.axiosDelete(
    url.DESEASE_CONTROL_DEMAND + `/delete/${planNo}`
  );
}
/**
 * 批量删除需求信息
 */
export function batchDeleteDemand(ids) {
  return axiosUtil.axiosDelete(
    url.DESEASE_CONTROL_DEMAND + `/deleteBatch`,
    ids
  );
}
/**
 * 修改需求
 */
export function modifyDemandNum(data) {
  return axiosUtil.axiosPut(url.DESEASE_CONTROL_DEMAND + `/update`, data);
}
/**
 * 导出excel
 */
export function exportDemand(params) {
  return axiosUtil.axiosDownload(
    url.DESEASE_CONTROL_DEMAND + "/export",
    params
  );
}

// 查看下级接种单位需求计划明细
export function showDetailList(planNo, params) {
  return axiosUtil.axiosGet(
    url.DESEASE_CONTROL_DEMAND + `/mz/detail/${planNo}`,
    params
  );
}
// 查看下级接种单位需求计划明细详情
export function showDetailInfo(planNo, params) {
  return axiosUtil.axiosGet(
    url.DESEASE_CONTROL_DEMAND + `/mz/info/${planNo}`,
    params
  );
}
// 下级接种单位全部列表
export function mzAllList(params) {
  return axiosUtil.axiosGet(
    url.DESEASE_CONTROL_DEMAND + `/mz/list/all`,
    params
  );
}
// 汇总接种单位需求
export function collectList(data) {
  return axiosUtil.axiosPost(url.DESEASE_CONTROL_DEMAND + `/mz/hz`, data);
}
// 分配疫苗
export function ymAllocate(data) {
  return axiosUtil.axiosPut(url.DESEASE_CONTROL_DEMAND + `/mz/fp`, data);
}
// 导出疾控下级接种单位需求计划明细
export function exportDetailList(jkPlanNo, data) {
  return axiosUtil.axiosDownload(
    url.DESEASE_CONTROL_DEMAND + `/mz/export/${jkPlanNo}`,
    data
  );
}
