const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    proxy: {
      "": {
        target: "https://m.lizhi.fm/vodapi/",
        changeOrigin: true,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          origin: "https://m.lizhi.fm/vodapi",
          referer: "https://m.lizhi.fm/vodapi/m",
        },
      },
    },
  },
});
