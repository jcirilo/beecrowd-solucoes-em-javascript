// https://www.beecrowd.com.br/judge/pt/problems/view/1002

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var radius = parseFloat(lines.shift());
var pi = 3.14159;
var area = pi * Math.pow(radius, 2);

console.log("A=" + area.toFixed(4));
