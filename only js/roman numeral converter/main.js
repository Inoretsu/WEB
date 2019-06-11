'use strict'

function convertToRoman(num) {
    if (num > 3999 || num <= 0 || typeof num !== 'number') return "I'm sorry, I can't calculate it";
    let Roman_numbers = {
        Units: {
            0: '',
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX'
        },
        Dozens: {
            0: '',
            1: 'X',
            2: 'XX',
            3: 'XXX',
            4: 'XL',
            5: 'L',
            6: 'LX',
            7: 'LXX',
            8: 'LXXX',
            9: 'XC'
        },
        Hundreds: {
            0: '',
            1: 'C',
            2: 'CC',
            3: 'CCC',
            4: 'CD',
            5: 'D',
            6: 'DC',
            7: 'DCC',
            8: 'DCCC',
            9: 'CM'
        },
        Thousands: {
            1: 'M',
            2: 'MM',
            3: 'MMM'
        }
    };
    let num_str = num.toString().split('');
    let res_str = '';
    if (num_str.length === 4) {
        res_str += Roman_numbers.Thousands[num_str[0]];
        num_str.splice(0, 1);
    }
    if (num_str.length === 3) {
        res_str += Roman_numbers.Hundreds[num_str[0]];
        num_str.splice(0, 1);
    }
    if (num_str.length === 2) {
        res_str += Roman_numbers.Dozens[num_str[0]];
        num_str.splice(0, 1);
    }
    if (num_str.length === 1) {
        res_str += Roman_numbers.Units[num_str[0]];
        num_str.splice(0, 1);
    }
    return res_str;
}

console.log(convertToRoman(3999));