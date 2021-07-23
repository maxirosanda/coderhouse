const router = require('express').Router();
const palabrasController = require('../controllers/palabrasController');

router.get('/', palabrasController.obtenerPalabra);
router.post('/', palabrasController.guardarPalabra);


module.exports = router;