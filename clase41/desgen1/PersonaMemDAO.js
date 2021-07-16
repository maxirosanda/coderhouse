import { personaDTO } from './PersonaDTO.js';

class PersonaMemDAO {
    constructor() {
        this.persona = [];
    }

    getNextId = () => ( this.persona.length > 0 ? this.persona.length + 1 : 1);

    getIndex = (id) => (this.persona.findIndex( person => person.id === id));

    getAll = () => (this.persona);

    getByid = (id) => (this.persona[this.getIndex(id)]);

    updateByid = (id, persona) => {
        let personaUpdate = personaDTO(id, this.getFyH(), persona);
        this.persona.splice(this.getIndex(id), 1, personaUpdate);
        return personaUpdate;
    };
    
    deleteByid = (id) => { 
        this.persona.splice(this.getIndex(id), 1);
        return "Borrado";
    };

    getFyH = () => (new Date().toLocaleString());

    insert = (persona) => {
        let nuevaPersona = personaDTO(this.getNextId(), this.getFyH(), persona);
        this.persona.push(nuevaPersona);
        return nuevaPersona;
    }
}


export default PersonaMemDAO;