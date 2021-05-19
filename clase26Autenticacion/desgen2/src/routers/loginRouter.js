const router = require("express").Router();
const loginController = require("../controllers/loginControllers");
const passport = require("passport");
const path = require("path");
const pathPublic = "../../../public/";


router.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

router.get("/", loginController.checkLogin);
router.get("/login", loginController.showLogin);
router.get("/failLogin", (req, res) => { res.sendFile(path.join(__dirname + pathPublic + "login-error.html"))});
router.post("/login", passport.authenticate('login', {failureRedirect: 'failLogin'}), loginController.login);


router.get("/register",  loginController.showRegister);
router.get("/failRegister", (req, res) => { res.sendFile(path.join(__dirname + pathPublic + "register-error.html"))});
router.post("/register", passport.authenticate('register', {failureRedirect: 'failRegister'}), loginController.register);

router.get("/logout", loginController.logout);

router.get("/datos", loginController.showDatos);


module.exports = router;