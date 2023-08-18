"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmiter =
/*#__PURE__*/
function () {
  function EventEmiter() {
    _classCallCheck(this, EventEmiter);

    // 监听者
    this._events = {};
  }

  _createClass(EventEmiter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (this._events[eventName]) {
        this._events[eventName].push(callback);
      } else {
        this._events[eventName] = [callback];
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this = this;

      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      console.info("rest--->", rest);

      if (this._events[eventName]) {
        this._events[eventName].forEach(function (item) {
          item.apply(_this, rest);
        });
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, callback) {
      console.info("callback--->", callback);

      if (this._events[eventName]) {
        this._events[eventName] = this._events[eventName].filter(function (item) {
          return item !== callback;
        });
      }
    }
  }, {
    key: "once",
    value: function once(eventName, callback) {
      function one() {
        callback.apply(this, arguments);
        this.removeListener(eventName, one);
      }

      this.on(eventName, one);
    }
  }]);

  return EventEmiter;
}();

var Man =
/*#__PURE__*/
function (_EventEmiter) {
  _inherits(Man, _EventEmiter);

  function Man() {
    _classCallCheck(this, Man);

    return _possibleConstructorReturn(this, _getPrototypeOf(Man).apply(this, arguments));
  }

  return Man;
}(EventEmiter);

var man = new Man();
man.on("失恋", function (arr) {
  console.info("省钱哈哈", arr);
});
man.emit("失恋", ["wewe", "jjj"]);