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
  const [Constructor, ...args] = [...arguments];
  newObj.__proto__ = Constructor.prototype;
  var res = Constructor.apply(newObj, args);
  return typeof res === "object" ? res : newObj;
}

var child = _new(Person, "fuhaoliang");

var child2 = _new(Person, "fuhaoliang");

var child3 = new Person("child3");

// child2.arr.push(4);

console.info("child", child, child2);
