<template>
  <section class="article">
    <h2>{{ post.attributes.title }}</h2>
    <img :src="getImageSrc(post.attributes.image.data.attributes.url)" />
    <span>{{ dateFormat(post.attributes.createdAt) }}</span>
    <p>{{ post.attributes.text }}</p>
  </section>
</template>

<script setup>
import { useFetch } from "nuxt/app";
import { useRoute } from "vue-router";

import { getImageSrc } from "~/utils/getImageSrc.js";

const route = useRoute();
const { data } = await useFetch(
  `http://45.153.71.151/api/articles/${route.params.id}?populate=*`
);
const post = data.value.data;
</script>

<style>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  font-weight: 500;
}

.article h2 {
  margin: 0 0 30px 0;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}

.article img {
  max-width: 600px;
  height: 250px;
  border-radius: 30px;
  margin-bottom: 15px;
}

.article p {
  max-width: 700px;
  text-align: center;
  margin-top: 30px;
}
</style>
