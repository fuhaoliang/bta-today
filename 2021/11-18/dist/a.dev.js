"use strict";

function f() {
  return regeneratorRuntime.async(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", 'hello world');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

f().then(function (v) {
  return console.log(v);
});
console.info('fn', f());