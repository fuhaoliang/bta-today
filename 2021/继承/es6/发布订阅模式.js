class EventEmiter {
  constructor() {
    // 监听者
    this._events = {};
  }
  on(eventName, callback) {
    if (this._events[eventName]) {
      this._events[eventName].push(callback);
    } else {
      this._events[eventName] = [callback];
    }
  }
  emit(eventName, ...rest) {
    console.info("rest--->", rest);
    if (this._events[eventName]) {
      this._events[eventName].forEach((item) => {
        item.apply(this, rest);
      });
    }
  }
  removeListener(eventName, callback) {
    console.info("callback--->", callback);
    if (this._events[eventName]) {
      this._events[eventName] = this._events[eventName].filter(
        (item) => item !== callback
      );
    }
  }
  once(eventName, callback) {
    function one() {
      callback.apply(this, arguments);
      this.removeListener(eventName, one);
    }
    this.on(eventName, one);
  }
}

class Man extends EventEmiter {}

let man = new Man();

man.on("失恋", function (arr) {
  console.info("省钱哈哈", arr);
});
man.emit("失恋", ["wewe", "jjj"]);
