class Animal {
  age = 123;
  static className = "Animal";
  constructor(nameStr) {
    this.nameStr = nameStr;
  }
}

class Snake extends Animal {
  constructor(nameStr) {
    super(nameStr);
    this.job = "IT";
  }
}

let a = new Snake("123");

console.info("a-->", a.nameStr, Animal.className, Snake.className);

//public 公共的父类，实例，都可以访问到
//static 就表示该方法不会被实例继承，类可以继承，而是直接通过类来调用，这就称为“静态方法”。
//private 当成员被标记成private时，它就不能在声明它的类的外部访问：
//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类（子类）中仍然可以访问：
