//////////////////////////
// ¿Qué es un Observer? // (42)
//////////////////////////
/*
- Un observador es un consumidor de valores entregados 
  por un observable.

- Los observadores son un conjunto de devoluciones de llamada, 
  una para cada tipo de notificación entregada por el 
  Observable: next, error y complete.

//////////////////////////////
// ¿Qué es una Suscripción? // (44)
//////////////////////////////
- Una suscripción es un objeto que representa un recurso 
  disponible, generalmente la ejecución de un observable.

- Una suscripción tiene un método unsubscribe(), que sirve para 
  darse de baja, que no admite argumentos y simplemente elimina 
  el recurso que tiene la suscripción.

*/
import Utils from './utils'
import { Observable } from 'rxjs';

Utils.imprimirEnPantalla('¿Qué es un Observer? - INICIO');

// Función que retorna objeto Observable con un contador 
// inicial que se actualiza cada n msegs dados por
// argumento de la función (tiempo)
function contarPushMultiple(tiempo:any) {
    let reftimer:any
    let contadorPushMultiple = 0
    return new Observable(suscriber => {
        suscriber.next(contadorPushMultiple++)
        reftimer = setInterval(() => {
            suscriber.next(contadorPushMultiple)
            if (contadorPushMultiple == 4) {
                suscriber.complete()
            }
            if (contadorPushMultiple == 5) {
                // suscriber.error('Error contador Observable')
            }
            contadorPushMultiple++
        }, tiempo)

        return () => {
            Utils.imprimirEnPantalla('Fin contador por return')
            clearInterval(reftimer)
        }
    })
}

// Me subscribo al Observable y arranco ejecución
// con refresco de contador a 1 segundo
let suscriptor = contarPushMultiple(1000)
.subscribe(
    contador => Utils.imprimirEnPantalla(contador), // método next
    error => Utils.imprimirEnPantalla(error),       // método error
    () => Utils.imprimirEnPantalla('Fin contador por complete') // Método complete    
)

// Me desuscribo del Observable
// pasados 10 segundos
setTimeout(() => {
    suscriptor.unsubscribe()
}, 10000)