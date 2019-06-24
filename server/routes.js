const routes = require("next-routes");

// NOTE: Changes to routing require a rebuild.
module.exports = routes()
  .add({ name: "todos" })
  .add({ name: "post", pattern: "/post/:title", page: "post" });
