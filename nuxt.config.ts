// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    coreBaseURL: process.env.NUXT_ENV_BASE_URL,
  },
  nitro: {
    routeRules: {
      "/api/v1/**": {
        proxy: "https://gintonic-api.vercel.app/**",
        cors: true,
        headers: {
          "access-control-allow-origin": "GET",
        },
      },
    },
    errorHandler: "~/error",
  },
});
