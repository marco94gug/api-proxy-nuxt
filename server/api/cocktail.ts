export default defineEventHandler(async (event) => {
  const data = await $fetch("https://gintonic-api.vercel.app/popular");

  console.log("test");
  if (event.node.req.method === "GET") {
    return {
      text: "popular call",
    };
  }
});
