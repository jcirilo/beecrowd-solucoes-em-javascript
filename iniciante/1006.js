// https://www.beecrowd.com.br/judge/pt/problems/view/1006

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [a, b, c] = lines.map(v => parseFloat(v));
var pesos = {'a': 2, 'b': 3, 'c': 5};

media = (a * pesos.a) + (b * pesos.b) + (c * pesos.c);
media = media / (pesos.a + pesos.b + pesos.c);

console.log("MEDIA = " + media.toFixed(1));