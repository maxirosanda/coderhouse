module.exports = {

    obtenerParamsQS: function (req) {
        var qs = require("querystring")
        // Object.getOwnPropertyNames(req)
        var q = qs.parse(req.url.replace('/?', ''));
        return JSON.stringify(q)
    }

};