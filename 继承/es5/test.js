function Person(name) {
  this.name = name;
  this.age = 12;
}

Person.prototype.say = function () {
  console.info("say", this.name);
};

function _new() {
  const obj = {};
  const [Constructor, ...args] = [...arguments];
  obj.__proto__ = Object.create(Constructor.prototype);
  const res = Constructor.apply(obj, args);
  return typeof res === "object" ? res : obj;
}

var child = _new(Person, "fuhaoliang");

console.info("child", child);
