// https://www.beecrowd.com.br/judge/pt/problems/view/1041

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var brokeln = lines.shift().split(" ");
var [x, y] = brokeln;
var position = "";

function verifyPosition (x, y) {
    let pos = "";    
    if (x == 0.0 && y == 0.0) {
        pos = "Origem";
    } else if (x == 0.0 && y != 0.0) {
        pos = "Eixo Y";
    } else if (x != 0.0 && y == 0.0) {
        pos = "Eixo X";
    } else if (x > 0.0 && y > 0.0) {
        pos = "Q1";
    } else if (x < 0.0 && y > 0.0) {
        pos = "Q2";
    } else if (x < 0.0 && y < 0.0) {
        pos = "Q3";
    } else if (x > 0.0 && y < 0.0) {
        pos = "Q4";
    }
    
    return pos;
}

position = verifyPosition(x, y);
console.log(position);