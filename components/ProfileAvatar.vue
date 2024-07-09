<template>
  <div class="personal-page__avatar">
    <img class="personal-page__img" :src="avatarUrl" alt="Avatar" />
    <input class="personal-page__change" type="file" name="file" id="file" @change="changeAvatar" />
    <label class="personal-page__label" for="file"><span>Сменить аватар</span></label>
  </div>
</template>

<script setup>
const avatarUrl = ref("/defaultAvatar.jpg");

const changeAvatar = (event) => {
  const file = event.target.files[0];
  if (file) {
    avatarUrl.value = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss">
.personal-page {
  &__avatar {
    gap: 40px;
    display: flex;
    flex-direction: column;
  }

  &__img {
    max-width: 230px;
    max-height: 230px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 35px;
  }

  &__change {
    width: 0px;
    height: 0px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  &__label {
    color: #fff;
    background-color: #1976D2;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    text-transform: uppercase;
    width: auto;
    height: auto;
    padding: 4px 16px;
    min-height: 2.572em;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
}
</style>