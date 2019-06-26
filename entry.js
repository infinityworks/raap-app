const compat = require('next-aws-lambda');

module.exports = page => {
  const handler = (event, context, callback) => {
    console.log('URL: ', event.path);
    compat(page)(event, context, callback);
  };
  return handler;
};
