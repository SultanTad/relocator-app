import { defineStore } from "pinia";

export const useStaticDataStore = defineStore("staticData", {
  state: () => {
    return {
      countries: [],
    };
  },
});
