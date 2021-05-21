const router = require("express").Router();
const loginController = require("../controllers/loginController");
const pahtPublic = "../../../public/";
const jwt = require("../jwt/jwt");

router.get("/", jwt.auth, loginController.showDatos);
router.get("/login", loginController.showLogin);
router.post("/login", loginController.login);

router.get("/register", loginController.showRegister);
router.post("/register", loginController.register);

router.get("/datos", jwt.auth, loginController.showDatos);

module.exports = router;