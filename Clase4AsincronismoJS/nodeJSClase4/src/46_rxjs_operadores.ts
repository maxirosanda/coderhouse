//////////////////////////////
// ¿Qué son los operadores? // (46)
//////////////////////////////
/*
  - Los operadores son funciones.

  - Tipos de operadores: Pipeable Operator y Creation Operator.

  - Creation Operators son un tipo de operador que se pueden 
    llamar como funciones independientes para crear un nuevo 
    Observable.

  - Pipeable Operators son del tipo que se puede canalizar a 
    Observables utilizando la sintaxis: 

    ObservableInstance.pipe( operator1(), operator2(), .... ).

////////////////////////////////////
// Ejemplo operador Pipeable: Map // (49)
////////////////////////////////////
/*
  - map: pasa cada valor de fuente a través de una función 
    de transformación para obtener los valores de salida 
    correspondientes.
*/

///////////////////////////////////////
// Ejemplo operador Pipeable: Filter // (50)
///////////////////////////////////////
/*
  - filter: Solo emite un valor de la fuente si 
    pasa una función de criterio.
*/

import Utils from './utils'
import { interval, Observable, pipe } from 'rxjs';
import { filter, map} from 'rxjs/operators';

Utils.imprimirEnPantalla('¿Qué son los operadores? - INICIO');

///////////////
// EJEMPLO 1 //
///////////////
// Creation Operator: aquí "interval"
const observable1 = interval(1000); // En msegs

// Se subscribe al Observable creado.
// Se imprime un valor numérico cada 1 segundo
// y nunca se corta la suscripcion
observable1.subscribe({
  next(x) { Utils.imprimirEnPantalla('El valor es: ' + x) },
  error(err) { Utils.imprimirEnPantalla('Se ha producido un error: ' + err); },
  complete() { Utils.imprimirEnPantalla('Completado'); }
});

///////////////
// EJEMPLO 2 //
///////////////
// Pipeable Operators (ej. filter, map)
const observable2 = new Observable((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.next(5)
  observer.complete()
}).pipe(
  filter(data => data > 2), // Operador filtro
  map(val => Number(val) * 2) // Operador mapeo
)

// Se subscribe al Observable creado.
// Se imprime el número pasado como argumento siempre 
// que sea > 2 y a c/u se lo multiplica * 2
observable2.subscribe({
  next(x) { Utils.imprimirEnPantalla('El valor es: ' + x) },
  error(err) { Utils.imprimirEnPantalla('Se ha producido un error: ' + err); },
  complete() { Utils.imprimirEnPantalla('Completado'); }
});
