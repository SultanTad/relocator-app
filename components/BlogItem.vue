<template>
  <div class="blog-item">
    <div class="container">
      <NuxtLink :to="{ path: `/blog/${postId}` }">
        <q-card class="blog-item__wrapper" flat>
          <img
            class="blog-item__img"
            :src="getImageSrc(image.data.attributes.url)"
          />
          <q-card-section class="blog-item__inner">
            <div class="blog-item__head">
              <h2 class="blog-item__title">
                {{ title }}
              </h2>
              <p class="blog-item__text">
                {{ text }}
              </p>
            </div>
            <div class="blog-item__footer">
              <div class="blog-item__date">
                {{ dateFormat(createdAt) }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { dateFormat } from "~/utils/formatDate.js";
import { getImageSrc } from "~/utils/getImageSrc.js";

const props = defineProps({
  image: Object,
  postId: Number,
  title: String,
  text: String,
  createdAt: String,
});
</script>

<style lang="scss">
.blog-item {
  margin: 0 auto;
  &__wrapper {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    background: #fdfcfc;
    padding: 25px;
    transition: all 0.3s;
    border-radius: 40px !important;
    align-items: center;
    box-shadow: 2px 1px 3px 3px rgba(0, 0, 0, 0.09) !important;
    &:hover {
      background-color: #f3f3f3;
    }
  }
  &__title {
    margin-bottom: 20px;
    color: #3a3939;
  }
  &__text {
    font-size: 16px;
    line-height: 20px;
    color: #3a3939;
  }
  &__img {
    border-radius: 30px !important;
    width: 250px !important;
    height: 200px;
  }
  &__head {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__date {
    font-weight: 500;
    font-size: 17px;
    color: #3a3939;
  }
}
</style>
