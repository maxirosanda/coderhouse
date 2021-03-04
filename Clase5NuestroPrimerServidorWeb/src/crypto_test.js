global.crypto = require('crypto')
module.exports = {

    encriptar: function (key, datos) {        
        var cipher = crypto.createCipher('aes256', key);
        var crypted = cipher.update(datos, 'utf-8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },

    desencriptar: function (key, data) {
        var decipher = crypto.createDecipher('aes256', key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted
    }

};