// https://www.beecrowd.com.br/judge/pt/problems/view/1050

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dddDeEntrada = lines.shift();

const ddds = [
    {"ddd": 61, "destination": "Brasilia"},
    {"ddd": 71, "destination": "Salvador"},
    {"ddd": 11, "destination": "Sao Paulo"},
    {"ddd": 21, "destination": "Rio de Janeiro"},
    {"ddd": 32, "destination": "Juiz de Fora"},
    {"ddd": 19, "destination": "Campinas"},
    {"ddd": 27, "destination": "Vitoria"},
    {"ddd": 31, "destination": "Belo Horizonte"},
];

const estado = ( function (ddds) {
    let retorno = "DDD nao cadastrado";
    for (let i of ddds) {
        if (i.ddd == dddDeEntrada) {
            retorno = i.destination;
            return retorno;
        }
    }
    return retorno;
}) (ddds);

console.log(estado);