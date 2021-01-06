"use strict";

var name = "window name";
var obj = {
  name: "call_me_R"
};

function sayName() {
  console.info(this.name);
}

sayName(); // 'window name'

sayName.call(obj); // 'call_me_R'

sayName.apply(obj); // 'call_me_R'

var _sayName = sayName.bind(obj);

_sayName(); // 'call_me_R'