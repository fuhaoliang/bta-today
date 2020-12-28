class SingleClass {
  count = 0;
  constructor() {
    if (SingleClass.instance) {
      return SingleClass.instance;
    }
    SingleClass.instance = this;
  }
  add() {
    this.count = this.count + 1;
  }
}

var A = new SingleClass();
console.info("count", A.count);
A.add();

var B = new SingleClass();

console.info("B--->", B);
