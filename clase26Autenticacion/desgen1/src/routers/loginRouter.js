const router = require("express").Router();
const loginController = require("../controllers/loginControllers");


router.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

router.get("/", loginController.checkLogin);
router.get("/login", loginController.showLogin);
router.post("/login", loginController.login);


router.get("/register", loginController.showRegister);
router.post("/register", loginController.register);

router.get("/logout", loginController.logout);

router.get("/datos", control, loginController.showDatos);

function control (req, res, next) {
    if(req.session.nombre) {
        if(req.session.contador) {
            req.session.contador ++;
        } else {
            req.session.contador = 1;
        }
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = router;