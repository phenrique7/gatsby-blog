import { PingHandler } from "~/lib/common/handler/ping.handler";

export default defineEventHandler(async (event) => {
  return await new PingHandler(event).ping();
});
