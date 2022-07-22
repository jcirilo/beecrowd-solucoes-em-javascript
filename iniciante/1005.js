// https://www.beecrowd.com.br/judge/pt/problems/view/1005

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var pesoA = 3.5;
var pesoB = 7.5;
var media = (A * pesoA) + (B * pesoB);
var media = media / (pesoA + pesoB);

console.log("MEDIA = " + media.toFixed(5));