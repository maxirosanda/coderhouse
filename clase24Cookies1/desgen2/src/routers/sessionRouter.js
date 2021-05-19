const router = require("express").Router();
const sessionController = require("../controller/sessionController");


router.get("/root", sessionController.root);
router.get("/olvidar", sessionController.olvidar);

module.exports = router;