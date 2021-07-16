const router = require('express').Router();
const personasController = require('../controller/personas');


/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
router.get('/html-onwire', personasController.getHtmlOnwire);
router.post('/html-onwire', personasController.postHtmlOnwire);


/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */
router.get('/data-onwire', personasController.getDataOnWire);
router.post('/data-onwire', personasController.postDataOnWire);
router.get('/data-json', personasController.dataJSON);

module.exports = router;