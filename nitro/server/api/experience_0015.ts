// Work only with nightly channel
// defineRouteMeta({
//   openAPI: {
//     tags: ["test"],
//     description: "Test route description",
//     parameters: [{ in: "query", name: "test", required: true }],
//   },
// });

export default defineEventHandler(() => ({
  method: "API",
}));
