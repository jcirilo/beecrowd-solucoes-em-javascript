// https://www.beecrowd.com.br/judge/pt/problems/view/1040

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var grades = lines.shift().split(" ").map(e => parseFloat(e));
var weights = [2, 3, 4, 1];
var currentGradeWeight = (
    function(arrayOfWeights) {
        let gradeWeight = 0.0;
        for(let i of arrayOfWeights) {
            gradeWeight += i;    
        }
        return gradeWeight;
}) (weights);
var finalExam = parseFloat(lines.shift());
var currentSituation = "Undefined";
var currentGrade = 0.0;

for(let i in grades) {
    currentGrade += grades[i] * weights[i];
}

currentGrade = currentGrade / currentGradeWeight;

const verifySituation = (grade) => {
    let situation;
    if (grade >= 7.0) {
        situation = "aprovado.";
    } else if (grade < 5.0) {
        situation = "reprovado.";
    } else if (grade >= 5.0 && grade < 7.0) {
        situation = "em exame.";
    }
    return situation;
};

currentSituation = verifySituation(currentGrade);

console.log("Media: " + currentGrade.toFixed(1));
console.log("Aluno " + currentSituation);

if (currentSituation === "em exame.") {
    currentGrade = (currentGrade + finalExam)/2;
    if (currentGrade < 5.0 ) {
        currentSituation = "reprovado.";
    } else {
        currentSituation = "aprovado.";
    }
    console.log("Nota do exame: " + finalExam.toFixed(1));
    console.log("Aluno " + currentSituation);
    console.log("Media final: " + currentGrade.toFixed(1));
}