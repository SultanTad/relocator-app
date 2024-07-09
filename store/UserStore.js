import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
    isAuthUser: (state) => {
      return !!state.user;
    },
  },
});
