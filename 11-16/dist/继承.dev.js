"use strict";

function Fun(name) {
  age = 123;
  this.name = name;
  this.arr = [1, 2, 3];
}

Fun.prototype.say = function () {
  console.info('say');
};

function Obj(type) {
  Fun.call(this);
  this.type = type;
}

Obj.prototype = Object.create(Fun.prototype);
Obj.prototype.constructor = Obj;
var obj = new Obj();
console.info(obj); // apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.
// apply  call 就是继承

function _new() {
  var obj = Object.create(null);

  var _ref = Array.prototype.slice.call(arguments),
      Constructor = _ref[0],
      args = _ref.slice(1);

  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, args);
  return obj;
}