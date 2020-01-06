import React, { useState, useEffect } from "react";
import { useGet, post, put, get } from "./networking-helper";

const baseUrl = "https://4mdkymzgg5.execute-api.us-west-2.amazonaws.com/dev/";
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
