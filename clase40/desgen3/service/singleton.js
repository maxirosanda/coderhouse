export default class PrimeraConexion {
    static instancia;

    constructor() {
        if(!PrimeraConexion.instancia) {
            this.hora = new Date().toLocaleString();
            PrimeraConexion.instancia = this;
            console.log('Guardar Hora');
        } else {
            console.log('recuperar hora');
            return PrimeraConexion.instancia
        }
    }

    obtenerHora() {
        return this.hora;
    }
}