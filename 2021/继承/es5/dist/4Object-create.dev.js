"use strict";

function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.say = function () {
  console.info("name", this.name);
};

function Child(name) {
  Person.call(this, name);
  this.age = 28;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child; // 实现了父子隔离
// 如果是继承多个父类，可以利用 Object.create(...Fn.prototype)