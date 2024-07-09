<template>
  <div class="sidebar-content" :class="{ active_sidebar: selectedSidebar }">
    <q-icon
      class="sidebar-content__close"
      name="close"
      @click="$emit('close')"
    />
    <p class="sidebar-content__title">{{ selectedCountry?.name }}</p>
    <p class="sidebar-content__text">{{ selectedCountry?.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  selectedSidebar: Boolean,
  selectedCountry: Object,
});
</script>

<style>
.sidebar-content {
  background-color: rgb(243, 243, 246);
  width: 300px;
  height: 400px;
  overflow: hidden auto;
  border-radius: 40px;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 30%;
  transform: translateX(100%);
  transition: all 1s;
  z-index: 1000;
  color: rgb(40, 40, 44);
  display: flex;
  flex-direction: column;
}

.sidebar-content.active_sidebar {
  transform: translateX(0);
  transition: all 0.8s;
}

.sidebar-content__close {
  cursor: pointer;
  padding-left: 10px;
}
.sidebar-content__title {
  text-align: center;
}
</style>
