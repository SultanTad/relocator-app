<template>
  <section class="reg">
    <div class="container reg__container">
      <div class="reg__inner">
        <div class="reg__wrapper-form">
          <h3>Регистрация</h3>
          <q-form class="reg__form" @submit.prevent>
            <BaseInput
              type="text"
              placeholder="Имя пользователя"
              v-model="username"
            />
            <BaseInput type="text" placeholder="Почта" v-model="email" />
            <BaseInput
              autocomplete="on"
              type="password"
              placeholder="Пароль"
              v-model="password"
            />
            <BaseButton type="submit" @click="handleReg()"
              >Зарегистрироваться</BaseButton
            >
          </q-form>
          <div class="reg__links">
            <NuxtLink to="/auth">У меня уже есть аккаунт</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { register } from "../api/rest/register.js";

const username = ref("");
const email = ref("");
const password = ref("");

const router = useRouter()

const handleReg = async () => {
  try {
    const res = await register({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    router.push({ path: "/auth" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.reg {
  height: 100vh;
  display: flex;
  align-items: center;
}

.reg__container {
  display: flex;
  justify-content: center;
}

.reg__inner {
  border-radius: 25px;
  background-color: rgba(200, 218, 230, 0.57);
  box-shadow:
    inset 10px 10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  width: 300px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reg__wrapper-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.reg__wrapper-form h3 {
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 30px;
}

.reg__title {
  font-weight: 500;
  padding-top: 20px;
  font-size: 40px;
}

.reg__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
}

.reg__links {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
