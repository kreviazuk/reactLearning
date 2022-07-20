import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryUserList(data) {
  return axiosUtil.axiosGet(url.USER + "/list/page", data);
}
/**
 * 查询单条
 */
export function queryUser(id, data) {
  return axiosUtil.axiosGet(url.USER + "/info/" + id, data);
}
/**
 * 新增
 */
export function addUser(data) {
  return axiosUtil.axiosPost(url.USER + "/save", data);
}
/**
 * 修改
 */
export function updateUser(data) {
  return axiosUtil.axiosPut(url.USER + "/update", data);
}
/**
 * 删除
 */
export function deleteUser(id) {
  return axiosUtil.axiosDelete(url.USER + "/delete/" + id);
}
/**
 * 获取角色列表
 */
export function getRoleList() {
  return axiosUtil.axiosGet(url.USER + "/role/list/all");
}
/**
 * 获取投标企业列表
 */
export function getFactList() {
  return axiosUtil.axiosGet(url.USER + "/tbqy/list/all");
}
/**
 * 查询用户名是否唯一
 */
export async function checkLoginName(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/loginName", data)
    .catch((err) => err);
}
