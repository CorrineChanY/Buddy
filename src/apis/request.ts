import { getToken } from "@/utils/storage";
import axios from "axios";
import { baseURL, TIMEOUT, CONTENT_TYPE, ERROR_CODE } from "../config/index";
import Message from "../components/Message";

const Axios = axios.create({
  baseURL: baseURL,
  timeout: TIMEOUT,
  headers: { "Content-Type": CONTENT_TYPE },
  withCredentials: false,
});

// 请求拦截
Axios.interceptors.request.use(
  (config: any) => {
    config.headers["Authorization"] = getToken(); // getToken
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

// 响应拦截
Axios.interceptors.response.use(
  (res: any) => {
    const errorCode = res.data.status; // 状态码在哪里具体看后端
    // 错误处理
    switch (errorCode) {
      case ERROR_CODE.LOGIN_FAIL:
        // todo
        console.log("账号或密码错误，请重试。");
        Message.error("账号或密码错误，请重试。");
        break;

      case ERROR_CODE.CAPTCHA_ERR:
        console.log("验证码错误");
        Message.error("账号或密码错误，请重试。");
        break;

      case ERROR_CODE.PHONENUMBERNOTREGISTERED:
        console.log("手机号未注册");
        Message.error("手机号未注册，请先注册。");
        break;

      default:
        return res;
    }
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export default Axios;
