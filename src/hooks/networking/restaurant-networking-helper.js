import { useGet, post, put, get } from "./networking-helper";
import { baseUrl, restaurants } from "../../constants/routes";

export const getAllRestaurants = () => {
  return get(baseUrl + restaurants);
};

export const getRestaurantsBySearchTerm = searchTerm => {
  return get(baseUrl + restaurants + `?searchTerm=${searchTerm}`);
};
