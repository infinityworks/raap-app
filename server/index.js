const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const routes = require("./routes");
const handler = routes.getRequestHandler(app);

const createServer = () => {
  const server = express();
  return server.use(handler);
};

const server = createServer();

if (!process.env.LAMBDA) {
  app
    .prepare()
    .then(() => {
      server.listen(port, err => {
        if (err) throw err;
        console.log(`Ready on http://localhost:${port}`);
      });
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
}

exports.app = app;
exports.server = server;
