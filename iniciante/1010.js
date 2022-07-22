// https://www.beecrowd.com.br/judge/pt/problems/view/1010

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const obj = ([id, quantity, unitPrice]) => {
    return {
        "id": id,
        "quantity": quantity,
        "unitPrice": unitPrice,
        "totalValue": quantity * unitPrice 
    }
}

const getDataByStdinLine = (line) => {
    return lines[line].split(" ").map(e => parseFloat(e))
}

var obj1 = obj(getDataByStdinLine(0))
var obj2 = obj(getDataByStdinLine(1))
var value = obj1.totalValue + obj2.totalValue

console.log("VALOR A PAGAR: R$ " + value.toFixed(2))