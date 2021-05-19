const route = require("express").Router();
const sessionController = require("../controllers/sessionController");

route.get("/root", sessionController.root);
route.get("/olvidar", sessionController.olvidar);

module.exports = route;