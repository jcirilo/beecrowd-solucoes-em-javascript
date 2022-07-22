// https://www.beecrowd.com.br/judge/pt/problems/view/1009

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const percentageOnSale = .15;

const merchant = (function (data){
    let [name, fixedSalary, monthSalary] = data;
    name = name.replace("\r", "");
    fixedSalary = parseFloat(fixedSalary);
    monthSalary = parseFloat(monthSalary);
    comission = monthSalary * percentageOnSale;
    salaryWithComission = (comission + fixedSalary).toFixed(2);

    return {
        "name": name,
        "fixedSalary": fixedSalary,
        "monthSalary": monthSalary,
        "comission": comission,
        "salaryWithComission": salaryWithComission,
    }
})(lines);

console.log("TOTAL = R$ " + merchant.salaryWithComission)