export default defineEventHandler(async (event) => {
  const data = await fetch("https://gintonic-api.vercel.app/drinks");

  if (event.node.req.method === "GET") {
    const res = await data.json();
    return res;
  }
});
