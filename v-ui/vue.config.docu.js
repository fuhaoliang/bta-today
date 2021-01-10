const path = require("path");
const InsertHtmlWebpackPlugin = require("./webpackPlugins/InsertHtmlWebpackPlugin");

const cdn = {
  externals: {
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter"
  },
  js: [
    {
      src: "https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js"
    },
    {
      src: "https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js"
    },
    {
      src: "https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js"
    }
  ],
  css: []
};
module.exports = {
  configureWebpack: config => {
    // 忽略打包配置
    config.entry = path.resolve("examples/main.js");
    config.externals = cdn.externals;
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          //第三方库抽离
          vendor: {
            name: "vendors",
            priority: -10, //权重
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            minSize: 0, //大于0个字节
            minChunks: 1 //在分割之前，这个代码块最小应该被引用的次数
          },
          //公用模块抽离
          common: {
            chunks: "initial",
            priority: -20, //权重
            minSize: 0, //大于0个字节
            minChunks: 3 //抽离公共代码时，这个代码块最小被引用的次数
          }
        }
      }
    };
  },
  // 扩展webpack
  chainWebpack: config => {
    config
      .plugin("InsertHtmlWebpackPlugin")
      .use(InsertHtmlWebpackPlugin)
      .tap(args => {
        args[0] = cdn;
        return args;
      });
  }
};
