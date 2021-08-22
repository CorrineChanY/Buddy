export const baseURL = "http://39.101.183.162:18082";
export const TIMEOUT = 5000;
export const CONTENT_TYPE = "application/json";

const URL = {
  // font-end

  // back-end
  // user-related
  getCaptcha: "/login/validation/getValidationCode",
  postLoginByPassword: "/login/password",
  postLoginByCaptcha: "/login/validation/passInfo",
  // xxx-related
};

const ERROR_CODE = {
  LOGIN_FAIL: 2,
  CAPTCHA_ERR: 19,
};

export { URL, ERROR_CODE };