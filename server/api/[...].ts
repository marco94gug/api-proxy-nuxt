export default defineEventHandler(async (event) => {
  console.log("ALL ROUTES");
  const runtimeConfig = useRuntimeConfig();

  console.log(event.node.req);

  const reqPath = event.path?.split("/api")[1] as string;
  const data: any = await $fetch(reqPath, {
    baseURL: runtimeConfig.coreBaseURL,
  });

  return data;
});
