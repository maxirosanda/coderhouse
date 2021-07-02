const router = require("express").Router();
const opreaciones = require("../controllers/opreaciones");


router.get("/suma", opreaciones.sumar);

router.get("/resta", opreaciones.resta);

router.get("/mult", opreaciones.mult);

router.get("/div", opreaciones.div);

router.get("/listar", opreaciones.listar);

module.exports = router