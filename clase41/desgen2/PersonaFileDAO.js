import { personaDTO } from './PersonaDTO.js';
import fs from 'fs';


class PersonaMemDAO {

    constructor() {
        this.archivo = null;
    }

    init  = async (fileName) => {
        this.archivo = fileName;
        try {
            await fs.readFileSync(this.archivo, 'utf-8');
        } catch (e) {
            await fs.writeFileSync(this.archivo, JSON.stringify([]));
        }
    }

    
    getAll = async () => {
        if(!this.archivo) return "Debe llamar al metodo init primero";

        try {
            return JSON.parse(await fs.readFileSync(this.archivo, 'utf-8'));
        } catch (e) {
            console.log("error: ", e);
        }
    };
    
    getByid = async (id) => {
        if(!this.archivo) return "Debe llamar al metodo init primero";

        let personas = await this.getAll();
        let indice = this.getIndex(id, personas);
        return personas[indice];
    };
    
    insert = async (persona) => {
        if(!this.archivo) return "Debe llamar al metodo init primero";

        try {
            let personas = await this.getAll();
            let nuevaPersona = personaDTO(this.getNextId(personas), this.getFyH(), persona);
            personas.push(nuevaPersona);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return nuevaPersona;
        } catch (e) {
            console.log("error: ", e);
        }   
    }


    updateByid = async (id, persona) => {
        if(!this.archivo) return "Debe llamar al metodo init primero";

        try {
            let personas = await this.getAll();
            let personaUpdate = personaDTO(id, this.getFyH(), persona);
            personas.splice(this.getIndex(id, personas), 1, personaUpdate);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return personaUpdate;    
        } catch (e) {
            console.log("error: ", e)
        }
        
    };
    
    deleteByid = async (id) => { 
        if(!this.archivo) return "Debe llamar al metodo init primero";

        try {
            let personas = await this.getAll();
            personas.splice(this.getIndex(id, personas), 1);
            await fs.writeFileSync(this.archivo, JSON.stringify(personas));
            return "Borrado"; 
        } catch (e) {
            console.log("error: ", e)
        }
    };
    
    getNextId = (personas) => ( personas.length > 0 ? personas.length + 1 : 1);
    
    getIndex = (id, personas) => (personas.findIndex( person => person.id === id));
    
    getFyH = () => (new Date().toLocaleString()); 
}


export default PersonaMemDAO;