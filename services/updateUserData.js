import { useUserStore } from "~/store/userStore.js";
import { getUserData } from "~/api/rest/profiles.js";

export const updateUserData = async () => {
  const userStore = useUserStore();
  const res = await getUserData();
  userStore.user = res.data;
};
