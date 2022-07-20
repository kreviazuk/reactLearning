import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 获取临时token
 */
export function getTemporaryToken(data) {
  return axiosUtil.axiosGet(url.TEMPORARY_TOKEN, data);
}
/**
 * 登录
 */
export function login(data) {
  return axiosUtil.axiosPost(url.LOGIN, data);
}

/**
 * 查询所有地区
 */
export function getAllAreaTree(data) {
  return axiosUtil.axiosGet(url.COMMON_TREE, data);
}
/**
 * 查询用户所属地区
 */
export function getUserAreaTree(id, data) {
  return axiosUtil.axiosGet(url.COMMON_TREE_USER, data);
}
// 获取疫苗列表
export function getVaccineList() {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/vaccine");
}
// 获取生产企业列表
export function getManufacturersList(data) {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/qy", data);
}
// 根据疫苗和生产企业获取产品列表
export function getProduct(data) {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/product", data);
}
// 获取疫苗剂型 规格
export function getJxSpec(data) {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/jxSpec", data);
}
// 获取状态列表
export function getStatus(data) {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/status", data);
}

// 获取投标企业列表
export function getCompany(data) {
  return axiosUtil.axiosGet(url.TBQY, data);
}
//  获取未绑定投标企业的疫苗产品列表
export function getUnBindQyProduct(data) {
  return axiosUtil.axiosGet(url.COMMON_LIST + "/product", data);
}
