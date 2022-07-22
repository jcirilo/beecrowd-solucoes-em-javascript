// https://www.beecrowd.com.br/judge/pt/problems/view/1007

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c, d] = lines.map(v => parseInt(v));
var diferenca = ((a*b)-(c*d));

console.log("DIFERENCA = " + diferenca);
