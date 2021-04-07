//  La respuesta será en formato objeto y representará el tipo de cálculo, la figura, 
//  los parámetros de entrada y el resultado.

export class Perimetro {
    
    constructor() {}
    
    getPerimetroCuadrado (lado1:number){
        return { tipo: "perimetro", figura: "cuadrado", entrada: lado1, resultado: lado1*4 }
    }

    getPerimetroRectangulo (lado1:number, lado2:number){
        return { 
            tipo: "perimetro", 
            figura: "Rectangulo", 
            entrada: {
                lado1: lado1, 
                lado2: lado2
            }, 
            resultado: lado1*2 + lado2*2 
        };
    }

    getPerimetroCirculo (radio:number){
        return { tipo: "perimetro", figura: "Circulo", entrada: radio, resultado: (Math.PI * 2 * radio) }
    }
}