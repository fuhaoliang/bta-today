class InsertHtmlWebpackPlugin {
  constructor(options = {}) {
    this.js = options.js || [];
    this.css = options.css || [];
  }

  apply(compiler) {
    // 获取要插入的js的地址
    const js = this.js;
    // const css = this.css;
    // 定义要插入的script字符串
    const scriptCodeArr = js.reduce(
      (str, item) =>
        str +
        "<script " +
        Object.keys(item).reduce(
          (attrStr, attrKey) => attrStr + ` ${attrKey}="${item[attrKey]}"`,
          ""
        ) +
        "></script>",
      ""
    );
    console.info("scriptCodeArr-->", scriptCodeArr, js);
    // 编译时注入
    compiler.hooks.compilation.tap("compilation", compilation => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(
        "htmlWebpackPluginAfterHtmlProcessing",
        htmlPluginData => {
          // 获取html文件字符串
          const htmlStr = htmlPluginData.html.toString();
          // 字符串替换，在<body>字符串后追加script
          htmlPluginData.html = htmlStr.replace(
            /<body>/,
            `<body>
              ${scriptCodeArr}
            `
          );
        }
      );
    });
  }
}

module.exports = InsertHtmlWebpackPlugin;
