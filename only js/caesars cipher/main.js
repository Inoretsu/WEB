//Шифр Цезаря (смещение на 13 символов), возвращает декодированную строку, только заглавные буквы

'use strict'

function rot13(str) {
    if (str.length === 0) return "The string is empty";

    let res_str = str.split("").map((val)=>{
        if(/[A-M]/.test(val)) {
            return String.fromCharCode( val.charCodeAt(0) + 13 );
        }
        else if(/[N-Z]/.test(val)) {
            return String.fromCharCode( val.charCodeAt(0) - 13 );
        }
        else return val;
    }).join("");

    return res_str;
}


console.log(rot13("SERR PBQR PNZC"));