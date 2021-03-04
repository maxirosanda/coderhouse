///////////////////////////
// MENSAJE SEGÚN LA HORA // (42)
///////////////////////////
/*

- Desarrollar un servidor en node.js que escuche peticiones 
  en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 

  Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.

  Entre las 13 y las 19 hs será 'Buenas tardes!'. 

  De 20 a 5 hs será 'Buenas noches!'.

  Se mostrará por consola cuando el servidor esté listo para operar 
  y en que puerto lo está haciendo.

  Utilizar nodemon

*/
module.exports = {

    devolverMensajeHorario: function () {
        var moment = require('moment')

        // https://momentjs.com/
        let fechaActual = moment()

        // Umbral 06:00hs
        let umbralManana = moment().set({
            hour: '06',
            minute: '00',
            second: '00'
        })

        // Umbral 13:00hs
        let umbralTarde = moment().set({
            hour: '13',
            minute: '00',
            second: '00'
        })

        // Umbral 20:00hs
        let umbralNoche = moment().set({
            hour: '20',
            minute: '00',
            second: '00'
        })

        if (fechaActual.isBefore(umbralManana)) {
            return 'Buenas noches!'
        } else if (fechaActual.isBetween(umbralManana, umbralTarde)) {
            return 'Buenos dias!'
        } else if (fechaActual.isBetween(umbralTarde, umbralNoche)) {
            return 'Buenas tardes!'
        } else if (fechaActual.isAfter(umbralNoche)) {
            return 'Buenas noches!'
        }
    }
};