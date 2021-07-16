const router = require('express').Router();
const personasController = require('../controller/personas');

router.get('/html-onwire', personasController.getHtmlOnwire);
router.post('/html-onwire', personasController.postHtmlOnwire);

module.exports = router;