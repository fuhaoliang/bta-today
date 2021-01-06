"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.say = function () {
  console.info("say", this.name);
};

function _new() {
  var obj = {};

  var _ref = Array.prototype.slice.call(arguments),
      Constructor = _ref[0],
      args = _ref.slice(1);

  obj.__proto__ = Object.create(Constructor.prototype);
  var res = Constructor.apply(obj, args);
  return _typeof(res) === "object" ? res : obj;
}

var child = _new(Person, "fuhaoliang");

console.info("child", child);