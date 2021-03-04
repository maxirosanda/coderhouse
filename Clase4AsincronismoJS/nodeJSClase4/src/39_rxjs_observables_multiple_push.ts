///////////////////////////////
// Observables Múltiple Push // (39)
///////////////////////////////
/*
    Observable
    ----------
    - Colección de valores a la cual se puede "subscribir" 
      para tener acceso a los valores

    - Nuevo sistema "Push" para JavaScript

    - Produce múltiples valores "pusheando" Observers 
    (consumidores)

    - Es como un Promise con la diferencia de que puede 
      otorgar múltiples valores
*/
import Utils from './utils'
import { Observable } from 'rxjs';

// Babel: https://localhost:8081
Utils.imprimirEnPantalla('Observables Múltiple Push - INICIO');

// Se crea el observable.
const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 5000)
});

console.log('Antes de subscribir');
// Se subscribe al Observable creado.
observable.subscribe({
    next(x) { Utils.imprimirEnPantalla('El valor es: ' + x) },
    error(err) { Utils.imprimirEnPantalla('Se ha producido un error: ' + err); },
    complete() { Utils.imprimirEnPantalla('Completado'); }
});
console.log('Después de subscribir');