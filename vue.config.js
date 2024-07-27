const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/https://github.com/Ali-hasan-sss/aliVue.git/"
      : "/",
  transpileDependencies: true,
});
