import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryTbqyList(data) {
  return axiosUtil.axiosGet(url.TBQY, data);
}
/**
 * 查询所有(无权限)
 */
export function queryTbqyListWithNoAuth(areaCode) {
  return axiosUtil.axiosGet(url.COMMON + `/tbQy/${areaCode}`);
}
/**
 * 查询单条
 */
export function queryTbqy(id, data) {
  return axiosUtil.axiosGet(url.TBQY + id, data);
}
/**
 * 新增
 */
export function addTbqy(data) {
  return axiosUtil.axiosPost(url.TBQY, data);
}
/**
 * 修改
 */
export function updateTbqy(data) {
  return axiosUtil.axiosPut(url.TBQY, data);
}
/**
 * 删除
 */
export function deleteTbqy(id) {
  return axiosUtil.axiosDelete(url.TBQY + id);
}
/**
 * 查询企业名称是否唯一
 */
export async function checkTbqyName(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/qy/name", data)
    .catch((err) => err);
}
/**
 * 查询企业编码是否唯一
 */
export async function checkTbqyCode(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/qy/code", data)
    .catch((err) => err);
}
/**
 * 导出
 */
export function exportTbqy(data) {
  return axiosUtil.axiosDownload(url.TBQY + "export", data);
}
/**
 * 导入
 */
export function importTbqy(data) {
  return axiosUtil.axiosPost(url.TBQY + "import", {}, data);
}
/**
 * 模板下载
 */
export function downloadTbqy() {
  return axiosUtil.axiosDownload(url.TBQY + "download");
}
