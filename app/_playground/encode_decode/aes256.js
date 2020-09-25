var aes256 = require('aes256');

var key = 'my passphrase';
var plaintext = 'my plaintext message';

var encrypted = aes256.encrypt(key, plaintext);
var decrypted = aes256.decrypt(key, encrypted);

// console.log(encrypted);
// console.log(decrypted);

//-----------------------------------------------------------
var key = "p@ssw0rd55ciph#r";;
var plaintext = 'my plaintext message';

var cipher = aes256.createCipher(key);

var encrypted = cipher.encrypt(plaintext);
var decrypted = cipher.decrypt(encrypted);
// console.log(encrypted);
// console.log(decrypted);



//LbG2/AEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN+GeF+cHIZgdApXYRzI3lOA3j9eelwW1cK3caJY+TYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ/t5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr/ABLJJkIOY+Z4EzQlBuUAne4mNWSpEqmY+nqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q+rfX40s8DF/eVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW+nru36b5W0wvzslcIqJGiY+ntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS/fwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb+/6hKi/rp4JBeST2XjXp4zbjzJOaBUpPWv8Ec/BrgiEuo4/aIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6+ZEW/BKccYt+nBafgo/ICqo2NCLHNS/Q+QjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn/8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM
const urlParam = "LbG2%2FAEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN%2BGeF%2BcHIZgdApXYRzI3lOA3j9eelwW1cK3caJY%2BTYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ%2Ft5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr%2FABLJJkIOY%2BZ4EzQlBuUAne4mNWSpEqmY%2BnqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q%2BrfX40s8DF%2FeVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW%2Bnru36b5W0wvzslcIqJGiY%2BntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS%2FfwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb%2B%2F6hKi%2Frp4JBeST2XjXp4zbjzJOaBUpPWv8Ec%2FBrgiEuo4%2FaIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6%2BZEW%2FBKccYt%2BnBafgo%2FICqo2NCLHNS%2FQ%2BQjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn%2F8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM";
const encoded = decodeURIComponent(urlParam);
console.log(encoded);
const decoded = aes256.decrypt(key, encoded);
const decoded2 = cipher.decrypt(encoded);
console.log(decoded);
console.log(decoded2);