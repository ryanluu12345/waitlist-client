import { useGet, post, put, get } from "./networking-helper";
import { baseUrl, waitlist } from "../../constants/routes";

export const useGetAllWaitlist = () => {
  return useGet(baseUrl + waitlist);
};

export const getAllWaitlist = () => {
  return get(baseUrl + waitlist);
};

export const addToWaitlist = body => {
  return post(baseUrl + waitlist, body);
};

export const updateWaitlistStatus = (id, body) => {
  return put(baseUrl + waitlist + id, body);
};
