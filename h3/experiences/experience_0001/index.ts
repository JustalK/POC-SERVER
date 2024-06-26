import { createRouter, defineEventHandler } from "h3";

const router = createRouter()
  .get(
    "/",
    defineEventHandler(() => {
      return "GET: hello world";
    })
  )
  .post(
    "/",
    defineEventHandler(() => {
      return "POST: hello world";
    })
  )
  .put(
    "/",
    defineEventHandler(() => {
      return "PUT: hello world";
    })
  )
  .delete(
    "/",
    defineEventHandler(() => {
      return "DELETE: hello world";
    })
  )
  .patch(
    "/",
    defineEventHandler(() => {
      return "PATCH: hello world";
    })
  )
  .head(
    "/",
    defineEventHandler(() => {
      return "HEAD: hello world";
    })
  );

export default router.handler;
