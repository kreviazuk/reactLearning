import url from "@/axios/urls";
import axiosUtil from "@/axios/axios";

// /**
//  * 获取结算单列表
//  */
// export function getReportList(data) {
//   return axiosUtil.axiosGet(url.PREPORT_ORDER, data);
// }

// /**
//  * 查看结算详情
//  */
// export function queryReport(id) {
//   return axiosUtil.axiosGet(url.PREPORT_ORDER + id);
// }

// /**
//  * 结算
//  */
// export function handlerReport(data) {
//   return axiosUtil.axiosPut(url.PREPORT_ORDER, data);
// }




/**
 * 接种单位结算列表
 */
 export function getStationList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/station/page", data);
}
/**
 * 成人明细列表
 */
 export function getAdultStationList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/station/adult/page", data);
}
/**
 * 成人明细列表导出
 */
 export function exportAdultStationList(data) {
  return axiosUtil.axiosDownload(url.PREPORT_ORDER + "/station/adult/export", data);
}
/**
 * 儿童明细列表
 */
 export function getChildStationList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/station/child/page", data);
}
/**
 * 儿童明细列表导出
 */
 export function exportChildStationList(data) {
  return axiosUtil.axiosDownload(url.PREPORT_ORDER + "/station/child/export", data);
}
/**
 * 接种单位结算导出
 */
 export function exportStationList(data) {
  return axiosUtil.axiosDownload(url.PREPORT_ORDER + "/station/export", data);
}

/**
 * 结算前展示结算信息
 */
 export function getStationInfo(settleIds) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/station", settleIds);
}
/**
 * 结算前展示结算信息
 */
 export function editStation(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/station", data);
}
/**
 * 投标企业结算列表
 */
 export function getQyReportList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/qy/", data);
}
/**
 * 结算前展示信息
 */
 export function getBeforeSettleInfo(settleIds) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/qy/beforeSettle", settleIds);
}
/**
 * 接种单位结算统计列表
 */
 export function getTotalStationList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/total/station/page", data);
}
/**
 * 投标企业结算统计列表
 */
 export function getTotalContractList(data) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + "/total/contract/page", data);
}

// 接种单位单笔结算
export function stationSettle(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/station/settle", data);
}
// 接种单位批量结算
export function stationSettleBatch(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/station/batch/settle", data);
}
// 接种单位分账历史记录
export function getMzSettleDetailHis(mzSettleDetailId) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + `/station/getMzSettleDetailHis/${mzSettleDetailId}`);
}

// 获取接种单位结算确认信息
export function mzSettleInfoConfirm(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/station/mzSettleInfoConfirm", data);
}
// 查看结算信息
export function getMzSettleInfo(settleId) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + `/station/getMzSettleInfo/${settleId}`);
}
/**
/**
 * 投标企业结算导出
 */
 export function exportQyList(data) {
  return axiosUtil.axiosDownload(url.PREPORT_ORDER + "/qy/export", data);
}
// 获取投标企业结算确认信息
export function csSettleInfoConfirm(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/qy/csSettleInfoConfirm", data);
}
// 投标企业单笔结算
export function qySingleSettle(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/qy/settle", data);
}
// 投标企业结算详情
export function getCsSettleDetail(csSettleId) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + `/qy/getCsSettleDetail/${csSettleId}`);
}
// 投标企业批量结算
export function qyBatchSettle(data) {
  return axiosUtil.axiosPost(url.PREPORT_ORDER + "/qy/batch/settle", data);
}
// 投标企业分账历史记录
export function getQySettleDetailHis(csSettleDetailId) {
  return axiosUtil.axiosGet(url.PREPORT_ORDER + `/qy/getCsSettleDetailHis/${csSettleDetailId}`);
}