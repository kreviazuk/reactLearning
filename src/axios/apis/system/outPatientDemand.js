import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 新增需求计划
 */
export function addDemand(data) {
  return axiosUtil.axiosPost(url.OUTPATIENT_DEMAND + "/save", data);
}
/**
 * 编辑需求计划
 */
export function updateDemand(data) {
  return axiosUtil.axiosPut(url.OUTPATIENT_DEMAND + "/update", data);
}
/**
 * 查询所有
 */
export function queryDemands(data) {
  return axiosUtil.axiosGet(url.OUTPATIENT_DEMAND + "/list/page", data);
}
/**
 * 查询需求信息
 */
export function queryDemandDetail(planNo) {
  return axiosUtil.axiosGet(url.OUTPATIENT_DEMAND + `/info/${planNo}`);
}
/**
 * 删除需求信息
 */
export function deleteDemand(planNo) {
  return axiosUtil.axiosDelete(url.OUTPATIENT_DEMAND + `/delete/${planNo}`);
}
/**
 * 批量删除需求信息
 */
export function batchDeleteDemand(ids) {
  return axiosUtil.axiosDelete(url.OUTPATIENT_DEMAND + `/deleteBatch`, ids);
}
/**
 * 上报需求信息
 */
export function reportDemand(planNo, status) {
  return axiosUtil.axiosPut(
    url.OUTPATIENT_DEMAND + `/update/${planNo}/${status}`
  );
}
/**
 * 导出excel
 */
export function exportDemand(params) {
  return axiosUtil.axiosDownload(url.OUTPATIENT_DEMAND + "/export", params);
}
/**
 * 金苗宝同步列表
 */
export function queryJmList(data) {
  return axiosUtil.axiosGet(url.OUTPATIENT_DEMAND + "/jmb/list", data);
}
/**
 * 金苗宝需求单汇总
 */
export function jmCollect(data) {
  return axiosUtil.axiosGet(url.OUTPATIENT_DEMAND + "/jmb/total", data);
}
/**
 * 生成需求计划
 */
export function generateDemand(data) {
  return axiosUtil.axiosPost(url.OUTPATIENT_DEMAND + "/jmb", data);
}
/**
 * 登记疫苗大类列表
 */
export function queryYMTypeList() {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/vaccine");
}
/**
 *新疫苗大类列表
 */
export function queryYMType() {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/product/Type");
}
/**
 * 根据登记疫苗大类请求疫苗简称
 */
export function queryYMList(typeCode) {
  return axiosUtil.axiosGet(url.COMMON_LIST + `/vaccine/${typeCode}`);
}
