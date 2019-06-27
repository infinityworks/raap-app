module.exports = {
  // assetPrefix: 'https://s3.amazonaws.com/infinity-works-daniel-r-assets',
  target: 'serverless',
  // useFileSystemPublicRoutes: false,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
