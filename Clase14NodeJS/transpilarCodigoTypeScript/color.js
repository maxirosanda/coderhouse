"use strict";
var MAX = 255;
var Colors = /** @class */ (function () {
    function Colors() {
        this.color = "";
        this.color = "color: (" + this.createColor() + ", " + this.createColor() + ", " + this.createColor() + ")";
    }
    Colors.prototype.createColor = function () {
        return Math.floor(MAX * Math.random());
    };
    Colors.prototype.getColor = function () {
        return this.color;
    };
    return Colors;
}());
function init() {
    var nuevoColor = new Colors();
    console.log(nuevoColor.getColor());
}
init();
