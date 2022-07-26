// https://www.beecrowd.com.br/judge/pt/problems/view/1051

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var renda = parseFloat(lines[0]);

function calcularImposto(renda) {
    if (renda <= 2000) {
        return null;
    }
    else if (renda <= 3000) {
        return ((renda - 2000) * 0.08);
    }
    else if (renda <= 4500) {
        return ((1000 * 0.08) + ((renda - 3000) * 0.18));
    }
    else {
        return ((1000 * 0.08) + (1500 * 0.18) + ((renda - 4500) * 0.28));
    }
}

const imposto = calcularImposto(renda);

console.log((!imposto) ? 'Isento' : ('R$ ' + imposto.toFixed(2)));