import { date } from "quasar";

export const dateFormat = (timeStamp) => {
  return date.formatDate(timeStamp, "DD-MM-YYYY");
};
