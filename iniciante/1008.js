// https://www.beecrowd.com.br/judge/pt/problems/view/1008

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// "IIFE" (search it)
const employer = ( function () {
    let [n, h, vph] = lines.map(v => parseFloat(v));
    return {
        'number': n,
        'worked-hours': h,
        'value-per-hour': vph,
        'salary': (h * vph).toFixed(2)
    }
})();

console.log("NUMBER = " + employer.number + "\n" + "SALARY = U$ " + employer.salary)