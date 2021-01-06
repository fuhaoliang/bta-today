define(function(require, exports, modules){
  var model1 = require('./model1')
  console.info(model1.getHello(), )
  var model2 = require('./model2')
  console.info(model2.getHello(), )
})