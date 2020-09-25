// http://localhost:3000/compilation?username=TST00&uidata=LbG2%2FAEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN%2BGeF%2BcHIZgdApXYRzI3lOA3j9eelwW1cK3caJY%2BTYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ%2Ft5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr%2FABLJJkIOY%2BZ4EzQlBuUAne4mNWSpEqmY%2BnqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q%2BrfX40s8DF%2FeVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW%2Bnru36b5W0wvzslcIqJGiY%2BntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS%2FfwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb%2B%2F6hKi%2Frp4JBeST2XjXp4zbjzJOaBUpPWv8Ec%2FBrgiEuo4%2FaIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6%2BZEW%2FBKccYt%2BnBafgo%2FICqo2NCLHNS%2FQ%2BQjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn%2F8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM
// CipherUtil.decryptAES256("p@ssw0rd44ciph#r", uidata);

var crypto = require('crypto');



// const value = "LbG2%2FAEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN%2BGeF%2BcHIZgdApXYRzI3lOA3j9eelwW1cK3caJY%2BTYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ%2Ft5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr%2FABLJJkIOY%2BZ4EzQlBuUAne4mNWSpEqmY%2BnqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q%2BrfX40s8DF%2FeVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW%2Bnru36b5W0wvzslcIqJGiY%2BntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS%2FfwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb%2B%2F6hKi%2Frp4JBeST2XjXp4zbjzJOaBUpPWv8Ec%2FBrgiEuo4%2FaIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6%2BZEW%2FBKccYt%2BnBafgo%2FICqo2NCLHNS%2FQ%2BQjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn%2F8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM";
const value = "hi guys. this is chance. nice to meet you~";
// const method = "aes-256-cbc";
const method = "aes256";
const key = "p@ssw0rd44ciph#r";

// Encypt
var cipher = crypto.createCipher(method, key);
var ciphered = cipher.update(value, 'utf8', 'base64');
ciphered += cipher.final('base64');
console.log(`### enctypted: ${ciphered}`);

// Decrypt
var decipher = crypto.createDecipher(method, key);
var deciphered = decipher.update(ciphered, 'base64', 'utf8');
deciphered += decipher.final('utf8');
console.log(`### decypted: ${deciphered}`);
