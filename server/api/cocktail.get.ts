export default defineEventHandler(async (event) => {
  const data = await $fetch("https://gintonic-api.vercel.app/popular");

  console.log("test");

  return {
    text: "popular call",
  };
});
