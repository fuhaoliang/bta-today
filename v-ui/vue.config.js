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
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  configureWebpack: config => {
    // 分割代码块
    // config.entry = path.resolve("examples/main.js");
    // 忽略打包配置
    config.externals = cdn.externals;
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          //公用模块抽离
          common: {
            chunks: "initial",
            minSize: 0, //大于0个字节
            minChunks: 2 //抽离公共代码时，这个代码块最小被引用的次数
          },
          //第三方库抽离
          vendor: {
            name: "chunk-vendors",
            priority: 1, //权重
            test: /node_modules/,
            chunks: "initial",
            minSize: 0, //大于0个字节
            minChunks: 1 //在分割之前，这个代码块最小应该被引用的次数
          }
        }
      }
    };
  },
  // 扩展webpack
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
    config
      .plugin("InsertHtmlWebpackPlugin")
      .use(InsertHtmlWebpackPlugin)
      .tap(args => {
        args[0] = cdn;
        return args;
      });
    // 配置cdn引入
    // config.plugin("html").tap(args => {
    //   args[0].cdn = cdn;
    //   return args;
    // });
  }
};
