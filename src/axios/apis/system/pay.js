import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryPayDetail(data) {
  return axiosUtil.axiosGet(url.PAY + `/set`,data);
}

/**
 * 新增
 */
export function setPay(data) {
  return axiosUtil.axiosPost(url.PAY + `/set`,data);
}