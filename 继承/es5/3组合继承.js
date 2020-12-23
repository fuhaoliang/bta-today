function Person(name) {
  this.name = name;
  this.age = 12;
  this.arr = [1, 2, 3];
}

Person.prototype.say = function () {
  console.info("name", this.name);
};

function Child(name) {
  Person.call(this, name);
  this.age = 28;
}

// Child.prototype = new Person();
Child.prototype = Person.prototype;

var child = new Child("fuhaoliang");
var child2 = new Child("sunxuting");

child2.arr.push(4);

delete child2.age;

console.info(child instanceof Child);
console.info(child2 instanceof Person);

console.info("child->name", child.name);

// 组合继承
// 原理：向父类传参数(call)和复用(prototype)
// 优点：可以继承父类原型上的属性，可传参，可复用
//      每个新的实例的构造属性都是私有的
// 缺点：调用2次父类构造函数（消耗内存）
//      子类构造函数会替换原型上的父类构造函数
//      无法删除父类原型上的继承属性

// 优化

// Child.prototype = Person.prototype
// 无法区分子父类实例
