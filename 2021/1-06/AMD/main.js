// main.js
// 依赖前置
define(function (require) {
  var model1 = require('./model1');
  console.log(model1.getHello());
  var model2 = require('./model2');
  console.log(model2.getHello());
});