import { BASE_URL } from "../const.js";

export const getImageSrc = (path) => {
  return `${BASE_URL}${path}`;
};
