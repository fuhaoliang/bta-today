"use strict";

function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.say = function () {
  console.info("name", this.name);
};

var child = new Person("fuhaoliang");

function _instanceof(A, B) {
  var p = A.__proto__;

  while (p) {
    if (p === B.prototype) {
      return true;
    } else {
      p = p.__proto__;
    }
  }

  return false;
}

console.info("-->", child instanceof Person);
console.info("_instanceof", _instanceof(child, Person));