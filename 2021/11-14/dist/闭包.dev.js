"use strict";

function s() {
  var sum = 0;

  function add() {
    sum++;
    return sum;
  }

  return s;
} // 1: 函数闭包是指有权访问另一个函数作用域中的变量的函数
// 2: 创建闭包函数常见的是在一个函数中创建另一函数，并用另一个函数访问其自身的局部变量
// 3: 闭包的特点：
//    1>函数嵌套函数
//    2>嵌套的函数访问了其内部参数
//    3>参数与变量不会被垃圾回收机制回收
// 4: 闭包的优点
//    1>希望变量长期储存在内村中
//    2>避免全局变量污染
//    3>变量私有化   
// 5: 闭包的实现
//    1>函数嵌套函数
//    2>外层函数返回内层函数 !!!!
//    3>外层函数接受一全局变量
// for循环下let 生成了块级别的作用域, i继承


function _fun(n, o) {
  console.log(o);
  return {
    fun: function fun(m) {
      return _fun(m, n);
    }
  };
}

var a = _fun(0);

a.fun(1);
a.fun(2);
a.fun(3); //undefined,?,?,?

var b = _fun(0).fun(1).fun(2).fun(3); //undefined,?,?,?


var c = _fun(0).fun(1);

c.fun(2);
c.fun(3); //undefined,?,?,?

undefined, 0, 0, 0;
undefined, 0, 1, 2;
undefined, 0, 1, 1;
var x = 100;
var y = 200;

var funA = function funA(x) {
  x += 1;
  var y = 201;

  var funB = function funB() {
    console.log(x); // 102

    console.log(y); // 201
  };

  return funB;
};

var f = funA(101);
f();