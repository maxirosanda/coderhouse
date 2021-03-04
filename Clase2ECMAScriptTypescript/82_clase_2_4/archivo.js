"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
+++++++++++++++++++
+ TypeScript (TS) +
+++++++++++++++++++
-> TypeScript es un superset de JS (construído encima de JS)

-> Agrega nuevas características a JS como tipado estático
   y objetos basados en clases.

-> TypeScript se puede usar en sustitución de JS, pero se necesita
   transpilar el código (código TS es compilado/traducido a código JS)

-> JS -> Dynamic Type / TS -> Static Type

-> El tipo de las variables se chequea en tiempo de compilación
   (antes de que se ejecute tu código)

-> El tipado en Typescript es opcional

-> El compilador detecta cualquier problema que pueda tener su código,
   antes de ejecutarse.

-> En TS, la orientación a objetos tiene más funciones integradas,
   soportando clases abstractas, modificadores de acceso e interfaces
   entre otras características.
   

*/
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, telefonos) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefonos = telefonos;
    }
    return Persona;
}());
// Creacion de primer objeto Persona
var objeto1 = new Persona('Aylen Reyes', 34, [+54112334556, +5411233311]);
console.log(objeto1);
// Creacion de segundo objeto Persona
var objeto2 = new Persona('Juan Perez', 29, [+54112399991]);
console.log(objeto2);
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, telefonos, nroEmpleado, area) {
        var _this = _super.call(this, nombre, edad, telefonos) || this;
        _this.nroEmpleado = nroEmpleado;
        _this.area = area;
        return _this;
    }
    return Empleado;
}(Persona));
// Creacion de primer objeto Empleado
var empleado1 = new Empleado('Aylen Reyes', 34, [+54112334556, +5411233311], 123123333, 'Ventas');
console.log(empleado1);
// Creacion de 2do objeto Empleado
var empleado2 = new Empleado('Juan Perez', 29, [+54112399991], 3449594, 'Operario');
console.log(empleado2);
