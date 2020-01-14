import { useGet, post, put, get } from "./networking-helper";

//TODO: move this to an env file or put in cloud formation and tie to serverless
const baseUrl =
  "https://y4fgu3fcwk.execute-api.us-east-1.amazonaws.com/develop/";
const waitlist = "waitlist/";
const restaurants = "restaurants/";
const users = "users/";

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

export const getAllRestaurants = () => {
  return get(baseUrl + restaurants);
};

export const getRestaurantsBySearchTerm = searchTerm => {
  return get(baseUrl + restaurants + `?searchTerm=${searchTerm}`);
};
