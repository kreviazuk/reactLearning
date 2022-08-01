import service from "axios";
// import router from "@/router";
import qs from "query-string";
// import store from "@/store";
// import * as types from "@/store/types";
<<<<<<< HEAD
// import * as consts from "@/utils/consts.js";
import paramsUtil from "./params.js";
// import { Notification } from "element-ui";
=======
import paramsUtil from "./params.js";
>>>>>>> cb0225bcbb89721e48f8cd75cbf088695d741a75

const axios = service.create({
  timeout: 1500000, // 请求超时时间,
});
axios.defaults.withCredentials = true;
// 跳转错误页面
function goErrorPage(msg) {
  sessionStorage.setItem("error", msg);
  // router.push("/errorPage");
}
// 提示错误信息
function errorMessage(msg) {
  // Notification.error({ title: "错误", message: msg,duration:1000 });
<<<<<<< HEAD
=======
  console.log('错误')
>>>>>>> cb0225bcbb89721e48f8cd75cbf088695d741a75
}
let i = 0;
/**
 * axios请求拦截器
 * @param {object} config axios请求配置对象
 * @return {object} 请求成功或失败时返回的配置对象或者promise error对象
 **/
axios.interceptors.request.use(
  (config) => {
    if (config.url.indexOf("/check/isExist") === -1) {
      i++;
      // store.commit(types.SET_LOADING_AXIOS, true);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
/**
 * axios 响应拦截器
 * @param {object} response 从服务端响应的数据对象或者error对象
 * @return {object} 响应成功或失败时返回的响应对象或者promise error对象
 **/
axios.interceptors.response.use(
  (response) => {
    if (response.config.url.indexOf("/check/isExist") === -1) {
      i--;
      if (i < 1) {
        // store.commit(types.SET_LOADING_AXIOS, false);
      }
      if(i === 0) {
      }
    }
    if (response.headers["filename"]) {
      return response;
    }
    if (response.data) {
      return paramsUtil.decodeParams(response.data);
    }
    console.log("response.data");
    console.log(response.data);
    return response.data;
  },
  (error) => {
    console.log(error)
    if (error.response.config.url.indexOf("/check/isExist") === -1) {
      i--;
      if (i < 1) {
        // store.commit(types.SET_LOADING_AXIOS, false);
      }
    }
    // 响应错误处理
    if (error.response.data.status === 504 || error.response.status === 404) {
<<<<<<< HEAD
      // goErrorPage(consts.ERROR_NO_NETWORK);
      return Promise.reject();
    } else if (error.response.status === 500 || error.response.status === 599) {
      //接口错误
      // errorMessage(consts.ERROR_COMMON);
=======
      return Promise.reject();
    } else if (error.response.status === 500 || error.response.status === 599) {
>>>>>>> cb0225bcbb89721e48f8cd75cbf088695d741a75
      return Promise.reject();
    } else if (error.response.status === 520) {
      //唯一性校验
      return Promise.reject(error.response.data.message);
    } else if (error.response.status === 530) {
      console.log('错误提示')
      //纯提示错误信息
      errorMessage(error.response.data.message);
      return Promise.reject();
    } else if (error.response.status === 531) {
      //跳转错误页面
      goErrorPage(error.response.data.message);
      return Promise.reject();
    } else if (error.response.status === 540) {
      //权限错误
      // goErrorPage(consts.ERROR_NO_PERMISSION);
      return Promise.reject();
    } else if (error.response.status === 550 || error.response.status === 551) {
      //跳转登录页面
      // goErrorPage(consts.ERROR_NO_LOGIN);
      return Promise.reject();
    }
    return Promise.reject(error.response.data);
  }
);
export default {
  axiosGet(url, params) {
    if (!params) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .get(url + "?" + qs.stringify(paramsUtil.encodeParams(params)), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
  axiosPost(url, params, files) {
    if (params === undefined) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .post(url, paramsUtil.encodeParamsPost(params, files), {
          headers: {
            "Content-Type": "multipart/form-data",
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
  axiosPostNew(url, params, files) {
    if (params === undefined) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .post(url, paramsUtil.encodeParamsPostNew(params, files), {
          headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
  axiosDownload(url, params) {
    if (params === undefined) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .post(url, paramsUtil.encodeParamsPost(params), {
          headers: {
            "Content-Type": "multipart/form-data",
            token: sessionStorage.getItem("token"),
          },
          responseType: "arraybuffer",
        })
        .then((res) => {
          const blob = new Blob([res.data]);
          const filename = res.headers["filename"];
          const a = document.createElement("a");
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = decodeURI(filename);
          const body = document.getElementsByTagName("body")[0];
          body.appendChild(a);
          a.click();
          body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
  axiosPut(url, params, files) {
    if (params === undefined) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .put(url, paramsUtil.encodeParamsPost(params, files), {
          headers: {
            "Content-Type": "multipart/form-data",
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
  axiosDelete(url, params) {
    if (!params) {
      params = {};
    }
    return new Promise(function (resolve, reject) {
      axios
        .delete(url + "?" + qs.stringify(paramsUtil.encodeParams(params)), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
};
