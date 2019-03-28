const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
  },
  chainWebpack: (config) => {
    /* eslint-disable */
    config
      .plugin('html')
      .tap((args) => {
        args[0].template = 'src/index.html';
        return args;
      });
    console.log('dirname', __dirname);
    config.resolve.alias
      .set("@config", path.resolve(__dirname, "./src/config"))
      .set("@assets", path.resolve(__dirname, "./src/assets"));
  },
};
