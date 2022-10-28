const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "": {
        target: "http://pro.app.jlgwzz.com/",
        changeOrigin: true,
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          origin: "http://pro.app.jlgwzz.com",
          referer: "http://pro.app.jlgwzz.com/",
        },
      },
    },
  },
});
