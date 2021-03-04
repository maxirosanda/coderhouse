/////////////////////////////////////////////
// Ejemplo operador de Creación: FromEvent // (48)
/////////////////////////////////////////////
/*
  - fromEvent: Crea un Observable a partir de eventos DOM, 
    eventos EventEmitter de Node.js u otros.

    fromEvent(element, 'click')  
*/
import Utils from './utils'
import { fromEvent } from 'rxjs';

Utils.imprimirEnPantalla('Operador de Creación: FromEvent - INICIO');

// El objeto MouseEvent se loguea a consola
// cada vez que hay uno de estos eventos sobre el documento
let arrEventos = []
arrEventos.push(fromEvent(document, 'click'));
arrEventos.push(fromEvent(document, 'dblclick'));
arrEventos.push(fromEvent(document, 'wheel'));

// Detección de evento por movimiento de rueda del mouse
// click y doble click
arrEventos.forEach(function(element) {
  element.subscribe(x => {
    Utils.imprimirEnPantalla(`Evento: ${x.type}`)
  })
})