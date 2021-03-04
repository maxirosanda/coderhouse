module.exports = {
    
    obtenerInfoSistema() {
        var os = require('os')
        
        return JSON.stringify({
            arquitectura: os.arch(),
            tipoOS: os.type(),
            plataforma: os.platform(),
            nombreHost: os.hostname(),
            cpus: os.cpus(),
        })
 
    }
};