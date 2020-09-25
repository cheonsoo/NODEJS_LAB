var crypto = require('crypto');

function getAlgorithm(keyBase64) {

    var key = Buffer.from(keyBase64, 'base64');
    switch (key.length) {
        case 16:
            return 'aes-128-cbc';
        case 32:
            return 'aes-256-cbc';

    }

    throw new Error('Invalid key length: ' + key.length);
}


function encrypt(plainText, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const cipher = crypto.createCipheriv(getAlgorithm(keyBase64), key, iv);
    let encrypted = cipher.update(plainText, 'utf8', 'base64')
    encrypted += cipher.final('base64');
    return encrypted;
};

function decrypt (messagebase64, keyBase64, ivBase64) {

    const key = Buffer.from(keyBase64, 'base64');
    const iv = Buffer.from(ivBase64, 'base64');

    const decipher = crypto.createDecipheriv(getAlgorithm(keyBase64), key, iv);
    let decrypted = decipher.update(messagebase64, 'base64');
    decrypted += decipher.final();
    return decrypted;
}


var keyBase64 = "p@ssw0rd55ciph#r";
var ivBase64 = 'AcynMwikMkW4c7+mHtwtfw==';
var plainText = 'Why, then, ’tis none to you, for there is nothing either good or bad, but thinking makes it so';

var cipherText = encrypt(plainText, keyBase64, ivBase64);
cipherText = "LbG2/AEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN+GeF+cHIZgdApXYRzI3lOA3j9eelwW1cK3caJY+TYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ/t5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr/ABLJJkIOY+Z4EzQlBuUAne4mNWSpEqmY+nqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q+rfX40s8DF/eVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW+nru36b5W0wvzslcIqJGiY+ntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS/fwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb+/6hKi/rp4JBeST2XjXp4zbjzJOaBUpPWv8Ec/BrgiEuo4/aIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6+ZEW/BKccYt+nBafgo/ICqo2NCLHNS/Q+QjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn/8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM";
var decryptedCipherText = decrypt(cipherText, keyBase64, ivBase64);

console.log('Algorithm: ' + getAlgorithm(keyBase64));
console.log('Plaintext: ' + plainText);
console.log('Ciphertext: ' + cipherText);
console.log('Decoded Ciphertext: ' + decryptedCipherText);