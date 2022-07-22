// https://www.beecrowd.com.br/judge/pt/problems/view/1011

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines);
var pi = 3.14159;
var volume = ((4.0/3) * pi * Math.pow(raio, 3));
console.log("VOLUME = " + volume.toFixed(3))