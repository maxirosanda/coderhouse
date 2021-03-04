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
 
-> En TypeScript, podemos utilizar patrones orientados a objetos. 

-> Objetos basados en clases:
   . Herencia
   . Modificadores Public, private, and protected (public por defecto)
   . Modificador Readonly.
   . Descriptores de acceso (Accessors)
   . Propiedades static
   . Clases abstractas
   . Interfaces
*/
class Persona {
    nombre:string;  // Tipado estatico (string)
    edad:number;
    telefonos:Array<number>;
    public constructor(nombre:string, 
        edad:number, telefonos:Array<number>) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefonos = telefonos;
    }
}

// Creacion de primer objeto Persona
let persona1 = new Persona('Aylen Reyes', 34, [+54112334556, +5411233311]);
console.log(persona1);

// Creacion de segundo objeto Persona
let persona2 = new Persona('Juan Perez', 29, [+54112399991]);
console.log(persona2);

class Empleado extends Persona {
    nroEmpleado:number;
    area:string;
    public constructor(nombre:string, edad:number, telefonos:Array<number>, 
        nroEmpleado:number, area:string) {
        super(nombre, edad, telefonos);
        this.nroEmpleado = nroEmpleado;
        this.area = area;
    }
}

// Creacion de primer objeto Empleado
let empleado1 = new Empleado(
    persona1.nombre, persona1.edad, persona1.telefonos, 123123333, 'Ventas');
console.log(empleado1);

// Creacion de 2do objeto Empleado
let empleado2 = new Empleado(
    persona2.nombre, persona2.edad, persona2.telefonos, 3449594, 'Operario');
console.log(empleado2);