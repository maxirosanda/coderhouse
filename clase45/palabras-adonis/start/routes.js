'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const palabraController = require('../app/Controllers/Http/palabraController');

Route.get('/sin-controller', async( {request, view} ) => {
    let subtitulo = 'SIN CONTROLLER';
    const { palabras } = request.get();
    let arrayPalabras = palabras.split(' ');
    let arrayPalabrasInvertido = palabras.split(' ').reverse();
    return view.render('palabras', {subtitulo, arrayPalabras, arrayPalabrasInvertido})
});

Route.get('/con-controller', 'palabraController.index');

Route.on('/').render('welcome')
