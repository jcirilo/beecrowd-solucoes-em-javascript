// https://www.beecrowd.com.br/judge/pt/problems/view/1037

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const value = parseFloat(lines.shift());
var output;

const verifyInterval = (value) => {
    let interval = "Intervalo ";

    if (value < 0 || value > 100) {
        interval = "Fora de intervalo";
    } else {
        if (value >= 0 && value <= 25) {
            interval += "[0,25]";
        } else {
            if (value > 25 && value <= 50) {
                interval += "(25,50]";
            } else {
                if (value > 50 && value  <= 75) {
                    interval += "(50,75]";
                } else {
                    if (value > 75 && value <= 100) {
                        interval += "(75,100]";
                    }
                }
            }
        }
    }

    return interval;
} 
output = verifyInterval(value);

console.log(output);