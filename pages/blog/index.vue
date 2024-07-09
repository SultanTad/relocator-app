<template>
  <div class="blog-page">
    <h2 class="blog-page__title">Блог</h2>
    <q-infinite-scroll ref="infiniteScroll" @load="onLoad" :offset="250">
      <BlogItem
        v-for="post in posts"
        :key="post.id"
        v-bind="post.attributes"
        :postId="post.id"
      />
      <q-skeleton
        v-for="item in 3"
        v-show="skeletonShow"
        class="blog-page__skeleton"
      />
      <template v-slot:loading>
        <div class="blog-page__dots">
          <q-spinner-dots class="blog-page__dots-item" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script setup>
import { getArticles } from "~/api/rest/articles.js";

const ARTICLES_PER_PAGE = 10;

const posts = ref([]);
const skeletonShow = ref(true);
const infiniteScroll = ref(null);

const onLoad = async (index, done) => {
  try {
    skeletonShow.value = false;

    const res = await getArticles(ARTICLES_PER_PAGE, index);

    posts.value.push(...res.data.data);

    if (res.data.data.length < ARTICLES_PER_PAGE) {
      infiniteScroll.value.stop();
    }
    done();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss">
.blog-page {
  margin: 25px;
  padding-right: 20px;
  padding-left: 25px;
  border-radius: 35px;
  &__title {
    font-weight: 500;
    font-family: Montserrat-Medium;
    letter-spacing: 3px;
    padding: 20px 0;
    color: #3a3939;
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px;
  }
  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__dots-item {
    width: 40px;
    color: #74b8ec;
  }
  &__skeleton {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    background: #fdfcfc;
    padding: 25px;
    transition: all 0.3s;
    border-radius: 40px !important;
    align-items: center;
    height: 200px;
  }
}
</style>
