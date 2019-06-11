'use strict'

//Кассовый аппарат
// Design a cash register drawer function checkCashRegister()
// that accepts purchase price as the first argument (price),
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
// or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value
// for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]},
// with the change due in coins and bills, sorted in highest to lowest order,
// as the value of the change key.

function checkCashRegister(price, cash, cid) {
    let out = {
        status: '',
        change: []
    };

    let change = cash - price;

    let calcSum = function () {
        return cid.reduce((a, b) => {
            let res = (a * 100 + b[1] * 100) / 100;
            return res;
        }, 0);
    };
    let sum = calcSum();

    let BillsCost = [
        ['PENNY', 0.01],
        ['NICKEL', 0.05],
        ['DIME', 0.1],
        ['QUARTER', 0.25],
        ['ONE', 1],
        ['FIVE', 5],
        ['TEN', 10],
        ['TWENTY', 20],
        ['ONE HUNDRED', 100]
    ];

    if(sum === change) {
        out.status = 'CLOSED';
        out.change = cid;
        return out;
    }

    if(sum < change) {
        out.status = 'INSUFFICIENT_FUNDS';
        return out;
    }

    let out_arr = [];

    for(let i = 8; i >= 0; i--) {
        let val = 0;
        while (cid[i][1] > 0 && change >= BillsCost[i][1]) {
            change -= BillsCost[i][1];
            cid[i][1] -= BillsCost[i][1];
            val += BillsCost[i][1];
            change = Math.round(change * 100) / 100;
        }
        if (val > 0) {
            val = Math.round(val * 100) / 100;
            out_arr.push([ BillsCost[i][0], val ])
        }
    }

    if (out_arr.length < 1 || change > 0) {
        out.status = 'INSUFFICIENT_FUNDS';
        return out;
    }

    out.status = 'OPEN';
    out.change = out_arr;
    return out;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));