import CryptoJS from "crypto-js";
import md5 from "md5";
// import * as consts from "@/utils/consts";
// import { Message } from "element-ui";

const MD5_KEY = "D1ckd#$G$fDdgh23";
const sKeyApp = "9mckdlpe$gg#$GJH";

function encrypt(word) {
  const key = CryptoJS.enc.Utf8.parse(sKeyApp); // 16位
  let encrypted = "";
  if (typeof word === "object") {
    word = JSON.stringify(word);
  }
  const srcs = CryptoJS.enc.Utf8.parse(word);
  encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
}

function decrypt(word) {
  const key = CryptoJS.enc.Utf8.parse(sKeyApp);
  word = CryptoJS.enc.Hex.parse(word).toString();
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr).toString(
    CryptoJS.enc.Utf8
  );
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  // eslint-disable-next-line
  const result = decryptedStr.toString().replace(/\u0000/g, '')
  return result;
}
//eslint-disable-next-line
export default {
  encodeParams(origin = {}) {
    console.log("入参2：", JSON.stringify(origin));
    origin.timestamp = new Date().getTime();
    const check = encrypt(origin);
    return {
      params: check,
      sign: md5(check + MD5_KEY),
      timestamp: new Date().getTime(),
    };
  },
  encodeParamsPost(origin = {}, files) {
    console.log("入参：", JSON.stringify(origin));
    origin.timestamp = new Date().getTime();
    const check = encrypt(origin);
    const data = new FormData();
    data.append("params", check);
    data.append("sign", md5(check + MD5_KEY));
    data.append("timestamp", new Date().getTime());
    if (files) {
      console.log("files");
      console.log(files);
      files.forEach((file) => {
        data.append("file", file);
      });
    }
    return data;
  },
  encodeParamsPostNew(data) {
 
    // const data = new FormData();
    // data.append("params", check);
    // data.append("sign", md5(check + MD5_KEY));
    // data.append("timestamp", new Date().getTime());
    // if (files) {
    //   console.log("files");
    //   console.log(files);
    //   files.forEach((file) => {
    //     data.append("file", file);
    //   });
    // }
    return data;
  },
  decodeParams(response) {
    if (!response.params) {
      return response;
    }
    const parameters = decrypt(response.params);
    const sign = md5(response.params + MD5_KEY);
    if (sign !== response.sign) {
      // Message.error({ message: consts.ERROR_INVALID_MESSAGE });
      return;
    }
    try {
      return JSON.parse(parameters);
    } catch (e) {
      return parameters;
    }
  },
};
