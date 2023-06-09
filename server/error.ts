import type { NitroErrorHandler } from "nitropack";

export default <NitroErrorHandler>function (error, event) {
  setResponseStatus(event, error.statusCode);

  if (error.statusCode === 404) {
    event.node.res.end(`
    ${error.statusCode}: data not found on ${event.node.req.url}`);
  } else if (error.statusCode === 500) {
    event.node.res.end(`
    ${error.statusCode}: ${error.message}`);
  }
};
