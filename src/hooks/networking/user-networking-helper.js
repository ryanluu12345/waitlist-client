import { post, put, get } from "./networking-helper";
import { baseUrl, signup, login } from "../../constants/routes";

export const loginUserAPI = (email, password) => {
  return post(baseUrl + login, {
    email,
    password
  });
};

export const loginUserByTokenAPI = () => {
  return post(baseUrl + login, null);
};
