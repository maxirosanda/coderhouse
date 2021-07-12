const assert = require("assert");
const axios = require("axios");
//otras comunmente utilizadas son Proxyquire y sinon

const url = 'http://localhost:5000';
const enviarNumero = numero => axios.post(`${url}/ingreso`, {numero});
const recibirNumero = () => axios(`${url}/egreso`);

describe('Corroborar que el servidor funciona OK', () => {

  let producto = {
      
  };

    it('deberia guardar 10 numeros consecutivos y leerlos', async () => {
        for (let i = 0; i < 10; i++) await enviarNumero(i);

        let {data} = await recibirNumero();
        let {numeros} = data;

        assert.strictEqual(numeros.length, 10);
        assert.deepStrictEqual(numeros, [0,1,2,3,4,5,6,7,8,9]);
    })
})