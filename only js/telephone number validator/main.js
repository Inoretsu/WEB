'use strict'
//Допустимые номера:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555     1 - код страны


function telephoneCheck(str) {
    let tel_reg = /^(1\s?)?((\d{3}-\d{3}-\d{4})|(\(\d{3}\)\s?\d{3}-\d{4})|(\d{10})|(\d{3}\s\d{3}\s\d{4}))$/;
    return tel_reg.test(str);
}
console.log(telephoneCheck("1 555-555-5555"));