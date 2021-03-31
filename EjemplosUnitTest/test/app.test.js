const should = require("should");
const request = require("supertest");
const app = require("../index");


before( () => {
    // setear la base de datos o mockear alguna tabla
})

describe("pruebas que el index.js funciona bien", () => {

    // this.timeout(3000); 
    it("corroborar la suma", done => {
        let resultado = app.suma(2,3);
        resultado.should.be.equal(5);
        done();
    });

    it("la suma de 4 + 3 debe ser 7", done => {
        let resultado = app.suma(4,3);
        resultado.should.be.equal(7);
        done();
    });
})


describe('test endpoints', () => {

    it("corroborar que el json persona contiene la propiedad autos", done => {
        request("http://localhost:5000")
            .get('/obtener')
            .set("X-Forwarded-For", "123.123.123.123")
            .set("accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end( (err, persona) => {
                let resultado = persona.body
                resultado.should.have.property("autos");
                resultado.autos.should.not.equal("null");
                done();
            });
    })
    
})

after( () => {
    // cerrar la base de datos
})
