
const assert = require("assert");

describe('Texto general descriptivo', () => {

    before(() => {
        await clearDB();
    });

    beforeEach( () => {
        'Entre cada it ejecuta este metodo';
    })

    it('test de algo particular 1', () => {
        
    })

    it('test de otra cosa particular', () => {
        
    })

    after(() => {

    })

});
const clearDB = await mongo.collection('nombre').deleteAll();