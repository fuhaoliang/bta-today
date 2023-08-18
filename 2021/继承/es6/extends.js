class Person {
  static job = "IT";
  #count = 0;
  constructor(name) {
    this.name = name;
    this.age = 12;
  }
  getName() {
    console.info("--->", (this.#count = this.#count + 1));
    return this.name;
  }
}

var p = new Person("fuhaoliang");

class Child extends Person {
  constructor(name) {
    super(name);
    this.childname = "child";
  }
}

var c = new Child("sunxunting");

console.info("p", Person.count, p.count);
