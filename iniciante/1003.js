// https://www.beecrowd.com.br/judge/pt/problems/view/1003

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var SOMA = A + B;

console.log("SOMA = " + SOMA);