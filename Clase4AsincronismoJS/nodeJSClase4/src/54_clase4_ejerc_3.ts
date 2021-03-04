/////////////////////////////////////////////
// Ejercicio 3: Promesas y Observables // (48)
/////////////////////////////////////////////
/*
  - Determinar la salida del console.log en estos 
    fragmentos de código. Explicar la diferencia de 
    comportamiento de cada uno de ellos.
*/

import Utils from './utils'
import { Observable } from 'rxjs';

Utils.imprimirEnPantalla('Ejercicio 3.A.');


// Contador que se incrementa en 1 cada segundo 
// a partir del valor 123
function contadorA(ini:any) {
  let cont = ini
  return new Observable(suscriber => {
    setInterval(() => {
      suscriber.next(cont++)
    }, 1000)
  })
}
contadorA(123)
  .subscribe(
    contadorA => Utils.imprimirEnPantalla(contadorA)
  )


Utils.imprimirEnPantalla('Ejercicio 3.B.');

function contadorB(ini:any) {
  let cont = ini
  return new Promise( resolve => {
      setInterval(() => {
          resolve(cont++)
      },1000)
  })
}

// Solo se imprime 123 en pantalla ya que aquí no hay
// un suscriptor para consumirlo
contadorB(123)
  .then (contadorB => Utils.imprimirEnPantalla(contadorB))
