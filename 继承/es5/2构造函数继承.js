function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.say = function () {
  console.info("say", this.name);
};

function Child() {
  Person.call(this, "reng");
}

var child = new Child();

console.info("name", child.name);
child.say();

// 构造函数继承
// 原理：利用call,apply将父类构造函数引入子类
// 优点：1:可以继承多个构造函数的属性
//      2:可以向父实例传参数
// 缺点：1:只继承父类构造函数的属性，不继承父类原型的属性
//      2:无法实现构造函数复用（每次都要新建）,臃肿
