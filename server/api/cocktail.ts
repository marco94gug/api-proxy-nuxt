export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "*",
  });
  if (getMethod(event) === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.statusMessage = "No Content.";
    return "OK";
  }

  const data = await $fetch("https://gintonic-api.vercel.app/popular");

  if (event.node.req.method === "GET") {
    return data;
  }
});
