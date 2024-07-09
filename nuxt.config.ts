import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  quasar: {
    plugins: [
      'Notify'
    ],
  },
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: [
    '~/assets/styles/style.css',
  ],
  build: {
    transpile: ['echarts', 'zrender', 'tslib'],
  },
})
