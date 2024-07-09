<template>
  <section class="auth">
    <div class="container auth__container">
      <div class="auth__inner">
        <div class="auth__wrapper-form">
          <h3>Войти</h3>
          <q-form class="auth__form" @submit.prevent>
            <BaseInput
              type="text"
              label="логин"
              v-model="email"
              :rules="[emailRule]"
            />
            <BaseInput
              autocomplete="on"
              type="password"
              label="пароль"
              v-model="password"
            />
            <BaseButton class="q-mb-md" type="submit" @click="handleLogin()"
              >Войти</BaseButton
            >
          </q-form>
          <div class="auth__links">
            <NuxtLink to="/register">Регистрация</NuxtLink>
            <NuxtLink to="/forgot-password">Забыли пароль</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";
import { useUserStore } from "~/store/userStore.js";

import { login } from "../api/rest/authorization.js";

const router = useRouter();
const userStore = useUserStore();

const email = ref("");
const password = ref("");

const isValidEmail = (email) => {
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
  return regex.test(email);
};

const emailRule = (val) => {
  return isValidEmail(val) || "Невалидный Email";
};

const handleLogin = async () => {
  if (!isValidEmail(email.value)) {
    return;
  }

  try {
    const {data: {jwt, user}} = await login({
      identifier: email.value,
      password: password.value,
    });
    useStorage("jwt", jwt);
    userStore.user = user
    router.push({ path: "/" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.auth {
  height: 100vh;
  display: flex;
  align-items: center;
}

.auth__container {
  display: flex;
  justify-content: center;
}

.auth__inner {
  border-radius: 25px;
  background-color: rgba(200, 218, 230, 0.57);
  box-shadow:
    inset 10px 10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  height: 350px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth__wrapper-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.auth__wrapper-form h3 {
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 30px;
}

.auth__title {
  font-weight: 500;
  padding-top: 20px;
  font-size: 40px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
}

.auth__links {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.auth__links a {
  color: #000;
}
</style>
