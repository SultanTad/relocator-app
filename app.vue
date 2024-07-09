<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { updateUserData } from "./services/updateUserData.js";
import { updateStaticData } from "./services/updateStaticData.js";

export default {
  async mounted() {
    // await updateUserData();
    Promise.allSettled([updateUserData(), updateStaticData()]);
  },
};
</script>
