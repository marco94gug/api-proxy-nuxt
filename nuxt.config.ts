// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
