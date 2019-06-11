'use strict'

function palindrome(str) {
    if (str.length === 0) return true;
    let correct_str = str.toLowerCase().replace(/[\W\s_]/g, "");
    let compare_str = correct_str.split('').reverse().join('');
    return correct_str === compare_str;
}

console.log(palindrome("eye"));