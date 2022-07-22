// https://www.beecrowd.com.br/judge/pt/problems/view/1038

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [itemId, itemQuanity] = lines[0].split(" ").map(e => parseInt(e))

const lanches = [
    {
        "id": 1,
        "name": "Cachorro Quente",
        "price": 4.00
    },
    {
        "id": 2,
        "name": "X-Salada",
        "price": 4.50
    },
    {
        "id": 3,
        "name": "X-Bacon",
        "price": 5.00
    },
    {
        "id": 4,
        "name": "Torrada Simples",
        "price": 2.00
    },
    {
        "id": 5,
        "name": "Refrigerante",
        "price": 1.50
    },
]

const selectedItem = ((itemId) => {
    let item = lanches.find(item => item.id === itemId)
    if (item === undefined) {
        return "unavaliable id exit -1";
    }
    return item;
})(itemId)

var totalValue = (selectedItem.price) * itemQuanity
console.log("Total: R$ " + totalValue.toFixed(2));