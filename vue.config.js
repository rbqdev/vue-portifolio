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
  },
};
