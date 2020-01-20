import { useState, useEffect } from "react";
import axios from "axios";

export const useGet = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getData();
  }, []);
  return { response, error, isLoading };
};

export const get = url => {
  return axios.get(url);
};

export const post = (url, body) => {
  return axios.post(url, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export const put = (url, body) => {
  return axios.put(url, body);
};
