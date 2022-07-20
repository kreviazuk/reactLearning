import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

/**
 * 查询所有
 */
export function queryRoles(data) {
  return axiosUtil.axiosGet(url.ROLE + "/list/all", data);
}
/**
 * 新增
 */
export function addRole(data) {
  return axiosUtil.axiosPost(url.ROLE + "/save", data);
}
/**
 * 修改
 */
export function updateRole(data) {
  return axiosUtil.axiosPut(url.ROLE + "/update", data);
}
/**
 * 删除
 */
export function deleteRole(id) {
  return axiosUtil.axiosDelete(url.ROLE + "/delete/" + id);
}
/**
 * 查询所有模块
 */
export function searchModules(data) {
  return axiosUtil.axiosGet(url.COMMON_TREE_MODULE, data);
}
/**
 * 查询所有角色类型
 */
export function searchRoleTypes(data) {
  return axiosUtil.axiosGet(url.COMMON_ROLE_TYPE, data);
}
/**
 * 唯一校验角色编码
 */
export async function checkRoleCode(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/roleCode", data)
    .catch((err) => err);
}
/**
 * 唯一校验角色名称
 */
export async function checkRoleName(data) {
  return await axiosUtil
    .axiosGet(url.COMMON_CHECK + "/roleName", data)
    .catch((err) => err);
}
