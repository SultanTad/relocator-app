<template>
  <section class="personal-page">
    <div class="container">
      <h1 class="personal-page__title">Личный кабинет</h1>
      <div class="personal-page__inner">
        <ProfileAvatar />

        <div class="personal-page__form">
          <div class="personal-page__nickname">
            <span>{{ userStore.user?.username }}</span>
            <q-icon name="edit" />
            <q-popup-edit v-model="user.name" :validate="nicknameValidate" v-slot="scope">
              <BaseInput autofocus dense v-model="user.name" hint="Ваше имя" :rules="[nicknameInputValid]">
                <template v-slot:after>
                  <BaseButton flat color="negative" icon="cancel" @click.stop.prevent="scope.cancel" />

                  <BaseButton flat color="positive" icon="check_circle" @click="changeName"
                    @click.stop.prevent="scope.set" :disable="disableButton" />
                </template>
              </BaseInput>
            </q-popup-edit>
          </div>
          <p>Дата регистрации: 12.02.24</p>
          <q-form>
            <BaseInput autocomplete="on" v-model="user.password" type="password" label="Старый пароль" />
            <BaseInput autocomplete="on" v-model="user.newPassword" type="password" label="Новый пароль" />
          </q-form>
          <BaseSelect v-model="myCountry" @load="getMyCountry" :options="countriesList" option-label="name"
            label="Моя страна" />
          <BaseSelect v-model="countriesVisited" multiple :options="countriesList" option-label="name" use-chips
            stack-label label="Посещеные страны" />
        </div>
      </div>
      <BaseButton class="personal-page__exit" @click="handleLogOut">
        Выйти
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { useStorage } from "@vueuse/core";
import { useUserStore } from "~/store/userStore.js";

import { patchUserName } from "~/api/rest/profiles.js";
import { useStaticDataStore } from "~/store/staticData.js";
import { updateUserData } from "~/services/updateUserData.js";

const JWT = useStorage("jwt");

const staticData = useStaticDataStore();
const userStore = useUserStore();

const router = useRouter();

const user = reactive({
  name: userStore.user?.username,
  password: null,
  newPassword: null,
});
const myCountry = ref(null);
const countriesVisited = ref([]);

const countriesList = computed(() => {
  return staticData.countries;
});
const getMyCountry = computed(() => {
  myCountry.value = staticData.countries.find(
    (el) => el.id === userStore.user?.my_country
  );
});

const nicknameValidate = (val) => {
  return val.length > 5;
};

const nicknameInputValid = (val) => {
  return scope.validate(val) || "More than 5 chars required";
};

const disableButton = () => {
  return (
    scope.validate(scope.value) === false || scope.initialValue === scope.value
  );
};

const handleLogOut = async () => {
  JWT.value = null;
  axios.defaults.headers.common["Authorization"] = null;
  userStore.user = null;
  router.push({ path: "/auth" });
};

const changeName = async () => {
  try {
    await patchUserName("07625d70-9e14-442e-ba93-5a32f07029be", user);
    updateUserData();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped lang="scss">
.personal-page {
  &__form {
    width: 350px;
  }

  &__title {
    font-size: 32px;
    text-align: center;
  }

  &__inner {
    display: flex;
    gap: 50px;
    justify-content: center;
  }

  &__icon {
    width: 20px;
  }

  &__nickname {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__exit {
    text-align: center;
    margin: 0 auto;
    background-color: transparent;
    display: block;
    border-radius: 5px;
    border: 2px solid #5192e6;
    padding: 5px 25px;
    width: 200px;
    color: black;
    text-transform: uppercase;
    margin-top: 30px;
    cursor: pointer;
  }
}
</style>
