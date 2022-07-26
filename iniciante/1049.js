// https://www.beecrowd.com.br/judge/pt/problems/view/1049

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const criarAnimal = (subfilo, classe, subclasse, nome) => {
    return {
        subfilo: subfilo,
        classe: classe,
        subclasse: subclasse,
        nome: nome,
    }
};

const animais = [
    criarAnimal('vertebrado', 'ave', 'carnivoro', 'aguia'),
    criarAnimal('vertebrado', 'ave', 'onivoro', 'pomba'),
    criarAnimal('vertebrado', 'mamifero', 'onivoro', 'homem'),
    criarAnimal('vertebrado', 'mamifero', 'herbivoro', 'vaca'),
    criarAnimal('invertebrado', 'inseto', 'hematofago', 'pulga'),
    criarAnimal('invertebrado', 'inseto', 'herbivoro', 'lagarta'),
    criarAnimal('invertebrado', 'anelideo', 'hematofago', 'sanguessuga'),
    criarAnimal('invertebrado', 'anelideo', 'onivoro', 'minhoca'),
];

function getAnimalName (subfilo, classe, subclasse) {
    for ( animal of animais) {
        if (animal.subfilo === subfilo && animal.classe === classe && animal.subclasse === subclasse) {
            return animal.nome;
        }
    }
}

console.log(getAnimalName(lines[0], lines[1], lines[2]) + "\n");