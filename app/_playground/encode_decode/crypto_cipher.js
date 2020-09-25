var crypto = require('crypto');

// const encoded = "LbG2/AEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN+GeF+cHIZgdApXYRzI3lOA3j9eelwW1cK3caJY+TYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ/t5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr/ABLJJkIOY+Z4EzQlBuUAne4mNWSpEqmY+nqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q+rfX40s8DF/eVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW+nru36b5W0wvzslcIqJGiY+ntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS/fwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb+/6hKi/rp4JBeST2XjXp4zbjzJOaBUpPWv8Ec/BrgiEuo4/aIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6+ZEW/BKccYt+nBafgo/ICqo2NCLHNS/Q+QjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn/8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM";
const method = "aes128";
const password = "p@ssw0rd55ciph#r";

const encode = (data) => {
    const keyBuf = Buffer.from(password, "utf8");
    const ivBuf = Buffer.from(password, "utf8");
    const cipher = crypto.createCipheriv(method, keyBuf, ivBuf);
    let encoded = cipher.update(data, 'utf8', 'base64');
        encoded += cipher.final('base64');
    return encoded;
};

const decode = (encoded) => {
    const keyBuf = Buffer.from(password, "utf8");
    const ivBuf = Buffer.from(password, "utf8");
    const decipher = crypto.createDecipheriv(method, keyBuf, ivBuf);
    let decoded = decipher.update(encoded, 'base64', 'utf8');
        decoded += decipher.final('utf8');
    return decoded;
};

const decodeURIParam = (str) => {
    // return decodeURIComponent(decode(str));
    return decode(decodeURIComponent(str));
};

const userInfo = {"sessionEmailAddr":"nryun79@gshs.co.kr","sessionUserId":"TST00","sessionHndphnNo":"010-1234-5678","sessionOwnrgCd":"","sessionDtctCd":"","sessionHandlePriv":"","sessionDutyCd":"21042","sessionDutyNm":"","sessionUserIp":"10.53.28.174","sessionDownPriv":"","sessionFuncAuthList":"#SEP#2901#SEP##SEP#2902#SEP##SEP#2903#SEP##SEP#2904#SEP##SEP#2906#SEP##SEP#2910#SEP##SEP#6901#SEP##SEP#6902#SEP##SEP#6903#SEP##SEP#6904#SEP##SEP#6905#SEP##SEP#6906#SEP##SEP#9900#SEP##SEP#9992#SEP##SEP#9999#SEP#","sessionOrgNm":"푸드라이프팀","sessionUserNm":"TST00","credatetime":"2020-06-30T10:16:29.537","sessionOrgId":"13013"}
const enc = encode(JSON.stringify(userInfo));
const dec = decode(enc);
// console.log(enc);
// console.log(dec);

const urlParam = "LbG2%2FAEr95dD8lmWkLe7nigM0oiDxJuMT17BUMbx8IZec05Rp06oZ3iG11dyGIa2j8lKN1ThS8wbxb7Q1iocR2P4XCmU5auT0DjMBi8Ieo2oAWJiQeUN%2BGeF%2BcHIZgdApXYRzI3lOA3j9eelwW1cK3caJY%2BTYRPgXm5m00Rrv0JemMyfCN6VZXEUy4rsQAtjcw1RTneqDdAa2rANFnJ%2Ft5XZXWumImrqlTMpYl9DuNor5cdVUfaXG6Yr%2FABLJJkIOY%2BZ4EzQlBuUAne4mNWSpEqmY%2BnqOwpo8qnBt0uiYURlNSOUQJ8DpkueTBY6fasiCjor3g0fnIoy9Q%2BrfX40s8DF%2FeVFY1RA28pUaASInq9gvF8JHJA8ojKNZFRouoASz0jcMpknsf7weal5Vm2SlUIFfEST6VEoG92BnFW%2Bnru36b5W0wvzslcIqJGiY%2BntDEv177nPRFtXVVIhsQRer0b6r32I1rgDS%2FfwQbQhouiw8WEM6AyvIC2wRDplEel3mspRU4YpaBY0SozKHL714yAEEb%2B%2F6hKi%2Frp4JBeST2XjXp4zbjzJOaBUpPWv8Ec%2FBrgiEuo4%2FaIcXncm56SOG9Inz33ze5t51uZbzDodSoRtJLA8vYwfjS9RP9WDT7RimSlDcOgIoeeH6%2BZEW%2FBKccYt%2BnBafgo%2FICqo2NCLHNS%2FQ%2BQjA2cVZmZRSiXzX9VhAP7DPUVrU2fGh7A1UGC5oNQDLuSvFk1OeD7e0c7rC0zICqlSFON4A7afsTX8iLCUOm3jPvNAxyt17H8gn%2F8nVfCtZZ3Yd3e7xFpCj1aVpvzrdouWkb95fK8W6GD0b0JM";
const dec2 = decodeURIParam(urlParam);
console.log(dec2);