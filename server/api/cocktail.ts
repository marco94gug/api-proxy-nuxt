export default defineEventHandler(async (event) => {
  const data = await $fetch("https://gintonic-api.vercel.app/popular");

  if (event.node.req.method === "GET") {
    return data;
  }
});
