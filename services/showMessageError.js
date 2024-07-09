import { Notify } from "quasar";

export const showMessageError = (message) => {
  Notify.create({
    message,
    type: "negative",
    position: "center",
    timeout: 5000,
  });
};
