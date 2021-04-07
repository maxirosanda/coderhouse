export class Superficie {
    constructor() {}

    getSuperficieCuadrado (lado1:number){
        return { tipo: "Superficie", figura: "cuadrado", entrada: lado1, resultado: Math.pow(lado1, 2) }
    }

    getSuperficieRectangulo (lado1:number, lado2:number){
        return { 
            tipo: "Superficie", 
            figura: "Rectangulo", 
            entrada: {
                lado1: lado1, 
                lado2: lado2
            }, 
            resultado: lado1*lado2
        };
    }

    getSuperficieCirculo (radio:number){
        return { tipo: "Superficie", figura: "Circulo", entrada: radio, resultado: (Math.PI * Math.pow(radio,2)) }
    }
}