const express = require('express');
const next = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
  .then(() => {
    const server = express();
    server.use(routes.getRequestHandler(app));

    const s = server.listen(port, err => {
      if (err) throw err;
      console.log(
        `Server started in ${
          process.env.NODE_ENV
        } mode on http://localhost:${port}.`,
      );
      s.emit('ready');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
