'use strict'


class PalabraControllers {
    index( {request, response, view}) {
        let subtitulo = 'CON CONTROLLER';
        const { palabras } = request.get();
        let arrayPalabras = palabras.split(' ');
        let arrayPalabrasInvertido = palabras.split(' ').reverse();
        response.send(view.render('palabras', {subtitulo, arrayPalabras, arrayPalabrasInvertido}))
    }
}

module.exports = PalabraControllers;