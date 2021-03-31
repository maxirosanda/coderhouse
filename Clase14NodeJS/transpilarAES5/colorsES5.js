"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX = 255;

var Colors = /*#__PURE__*/function () {
  function Colors() {
    _classCallCheck(this, Colors);

    var color = "";
    this.color = "color: (".concat(this.color(), ", ").concat(this.color(), ", ").concat(this.color(), ")");
  }

  _createClass(Colors, [{
    key: "color",
    value: function color() {
      return Math.floor(MAX * Math.random());
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }]);

  return Colors;
}();

var randomInt = function randomInt() {
  return Math.floor(Math.random() * MAX);
};

var color = new Colors();
console.log(color.getColor());
