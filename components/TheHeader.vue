<template>
  <q-layout view="lHh lpr lFf" container style="height: 50px">
    <q-header elevated>
      <q-toolbar class="row">
        <Logo />

        <div class="header_links">
          <q-list no-border class="row no-wrap">
            <MenuItem to="/" label="Карта" />
            <MenuItem to="/blog" label="Блог" />
            <MenuItem
              v-if="!store.isAuthUser"
              to="/auth"
              label="Вход/Регистрация"
            />
            <NuxtLink to="/personal">
              <img
                v-if="store.isAuthUser"
                class="header_links-img"
                :src="avatarUrl"
                alt="Avatar"
              />
              <span>{{ store.user.username }}</span>
            </NuxtLink>
          </q-list>
        </div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script setup>
import { useUserStore } from "~/store/userStore.js";

const avatarUrl = ref("/defaultAvatar.jpg");
const store = useUserStore();
</script>

<style>
.header_links-img {
  width: 50px;
}
</style>
