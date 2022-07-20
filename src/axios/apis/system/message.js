import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryMessageList(data) {
  return axiosUtil.axiosGet(url.MESSAGE + `/page`,data);
}
/**
 * 查询单挑信息详情
 */
export function queryMessageDetail(id) {
  return axiosUtil.axiosGet(url.MESSAGE + `/${id}`);
}
// 更新信息状态
export function updateMessageStatus(id) {
  return axiosUtil.axiosPut(url.MESSAGE + `/update/${id}`);
}