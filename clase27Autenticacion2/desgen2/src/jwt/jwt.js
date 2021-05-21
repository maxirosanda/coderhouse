const jwt = require("jsonwebtoken");
const path = require("path");


const generateToken = function(nombre) {
    return jwt.sign({nombre: nombre}, "ultrasecreto", {expiresIn: '1h'});
}

const auth = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    console.log(token);
    if(!token) {
        return res.sendFile(path.join(__dirname + "../../../public/login.html"));
    }
    
    try {
        console.log("bu")
        const decoded = jwt.verify(token, "ultrasecreto");
        console.log("decoded: ", decoded);
        req.user = decoded;
        next();
    } catch (e) {
        console.log(e);
        return res.render('login-error');
    }
}

module.exports = {generateToken, auth}