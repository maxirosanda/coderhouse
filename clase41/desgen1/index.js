import PersonaMemDAO from "./PersonaMemDAO.js";


( () => {

    const personaMemDAO = new PersonaMemDAO();

    console.log('1) Obtener todas las personas');
    console.log(personaMemDAO.getAll());
    console.log('---------------');


    console.log('2) Insertar una persona persona');
    const persona = {nombre: 'Cosmes', apellido: 'Fulanito', dni: '3344334433'}
    console.log(personaMemDAO.insert(persona));
    console.log('---------------');


    console.log('3) Insertar otra personas');
    const persona2 = {nombre:'Juan', apellido:'Perez', DNI: '11111111'}
    console.log(personaMemDAO.insert(persona2));
    console.log('---------------');


    console.log('4) Obtener todas las personas');
    console.log(personaMemDAO.getAll());
    console.log('---------------');


    console.log('5) update todas las personas');
    const personaUpdate = {nombre: 'pedro', apellido: 'Diaz', dni: '1122334455'}
    console.log(personaMemDAO.updateByid(2, personaUpdate));
    console.log('---------------');

    console.log('6) Obtener todas las personas');
    console.log(personaMemDAO.getAll());
    console.log('---------------');


    console.log('7) Borrar por id');
    console.log(personaMemDAO.deleteByid(1));
    console.log('---------------');


    console.log('8) Obtener todas las personas');
    console.log(personaMemDAO.getAll());
    console.log('---------------');

})();