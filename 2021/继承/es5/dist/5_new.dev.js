"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.job = "IT";

Person.prototype.say = function () {
  console.info("say", this.name);
};

function _new() {
  var newObj = {};

  var _ref = Array.prototype.slice.call(arguments),
      Constructor = _ref[0],
      args = _ref.slice(1);

  newObj.__proto__ = Constructor.prototype;
  var res = Constructor.apply(newObj, args);
  return _typeof(res) === "object" ? res : newObj;
}

var child = _new(Person, "fuhaoliang");

var child2 = _new(Person, "fuhaoliang");

var child3 = new Person("child3"); // child2.arr.push(4);

console.info("child", child, child2);