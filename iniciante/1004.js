// https://www.beecrowd.com.br/judge/pt/problems/view/1004

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var PROD = a * b;

console.log("PROD = " + PROD);