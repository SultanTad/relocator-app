import axios from "axios";
import { useStorage } from "@vueuse/core";

import { showMessageError } from "~/services/showMessageError.js";
import { BASE_URL } from "../const.js";

const JWT = useStorage("jwt");

axios.defaults.baseURL = BASE_URL;

if (JWT.value) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + JWT.value;
}

export default ({
  url = "/",
  method = "get",
  params = {},
  data = {},
  headers = {},
}) => {
  return axios({
    url,
    method,
    headers: { ...headers },
    params,
    data,
  }).catch((error) => {
    showMessageError(error.message);
    console.error(error);
  });
};
