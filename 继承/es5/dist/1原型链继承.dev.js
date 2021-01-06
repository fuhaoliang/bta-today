"use strict";

function Person(name) {
  this.name = name;
  this.age = 12;
  this.arr = [1, 2, 3];
}

Person.prototype.job = "IT";

Person.prototype.say = function () {
  console.info("say", this.name);
};

var person = new Person("fuhaoliang");
console.info("age", person.age);
console.info("job", person.job);
person.say(); // 原型链继承

function Child() {
  this.name = "child";
}

Child.prototype = new Person();
var child = new Child();
var child2 = new Child(); // Child.prototype.job = "11111";

child.job = "2222";
child.arr.push(4);
console.info("child->job", child.job); // 原理：通过__proto__向上继承父类所有方法属性
// 优点：可以继承原型属性，也可以继承构造函数属性
// 缺点：公用一个原型，继承而来的属性与方法改动，子类相互改动
// ！！！job未改变父类的原因是, 设置属性时，如果自身没有会在自身设置job