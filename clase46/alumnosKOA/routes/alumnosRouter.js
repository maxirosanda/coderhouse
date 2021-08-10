const Router = require('koa-router');

const router = new Router({prefix: '/alumnos'});

let alumnos = [];

router.get('/', (ctx, next) => {
    ctx.body = {
        status: 'success',
        message: alumnos
    };

    next();
});

router.get('/:dni', (ctx, next) => {
    let alumno = alumnos.find( alumno => alumno.dni == ctx.request.params.id);

    if(alumno) {
        ctx.body = alumno;
    } else {
        ctx.response.status = 404;
        ctx.body = {
            status: 'error!',
            message: 'Alumno no encontrado para ese dni'
        }
    };

    next();
});


router.post('/new', (ctx,next) => {
    let {dni, nombre, materia, nota} = ctx.request.body;

    if(!dni || !nombre || !materia || !nota) {
        ctx.response.status = 400;
        ctx.body = {
            status: 'Error',
            message: 'Por favor ingrese todos los datos'
        }
    } else {
        alumnos.push({
            dni: dni,
            nombre: nombre,
            materia: materia,
            nota: nota,
        });

        ctx.response.status = 201;
        ctx.body = {
            status: 'success',
            message: `Nuevo alumno agregado!. DNI: ${dni} y nombre: ${nombre}`
        }
    };

    next();
});

router.put('/update/:dni', (ctx, next) => {
    let {dni, nombre, materia, nota} = ctx.request.body;

    if(!dni || !nombre || !materia || !nota) {
        ctx.response.status = 400;
        ctx.body = {
            status: 'Error',
            message: 'Por favor ingrese todos los datos'
        }
    } else {
        let dni = ctx.request.params.dni;
        let index = alumnos.findIndex( alumno => alumnos.dni == dni);
        alumnos.splice(index, 1, ctx.request.body);

        ctx.body = {
            status: 'success',
            message: `Nuevo alumno modificado con DNI: ${dni} y nombre: ${nombre}`
        }
    };

    next();
});

router.delete('/delete/:dni', (ctx, next) => {
    let dni = ctx.params.dni
    let index = alumnos.findIndex(alumno => alumnos.dni == dni);
    alumnos.splice(index, 1);
    ctx.response.status = 200;
    ctx.body = {
        status: 'success',
        message: `Alumno con DNI: ${dni} eliminado correctamente`
    };
    next();
});

router.get('/promedio', (ctx, next) => {

    var regex = new RegExp( ctx.request.query.materia, 'ig' );

    let suma = alumnos.reduce( (sum, alumno) => (sum + alumno.nota), 0);
    let cant = alumnos.reduce( (sum, alumno) => (sum + (alumno.materia.match(regex) ? 1 : 0)), 0);
    let promedio = suma / cant;

    ctx.body = {
        promedio : cant ? promedio : `No hay alumnos en ${ctx.request.query.materia} para calcular el promedio`
    };

     next();
})


router.get('/test', (ctx, next) => {

    let {req, res} = ctx;
    
    console.log(req);
    console.log(res);
    
    ctx.body = {
        status: 'success',
        message: 'ok!'
    };
    next();
})



module.exports = router;