const lamejorliberira = require("coderhouse-test-operaciones");
const operaciones = require("../persistencia/index");

module.exports = {
    sumar: (num1, num2) => {
        let res = lamejorliberira.suma(num1, num2);
        operaciones.agregar({
            tipo: 'resta',
            params: [num1, num2],
            resultado: res,
            timestamp: Date.now()
        });

        return res;
    },
    resta: (num1, num2) => {
        let res = lamejorliberira.resta(num1, num2);

        operaciones.agregar({
            tipo: 'resta',
            params: [num1, num2],
            resultado: res,
            timestamp: Date.now()
        });

        return res;
    },
    mult: (num1, num2) => {
        let res = lamejorliberira.mult(num1, num2);

        operaciones.agregar({
            tipo: 'multiplicacion',
            params: [num1, num2],
            resultado: res,
            timestamp: Date.now()
        });

        return res;
    },
    div: (num1, num2) => {
        let res = lamejorliberira.div(num1, num2);

        operaciones.agregar({
            tipo: 'division',
            params: [num1, num2],
            resultado: res,
            timestamp: Date.now()
        });


        return res;
    },

    listar: () => {
        return operaciones.listar();
    }
}