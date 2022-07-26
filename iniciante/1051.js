// https://www.beecrowd.com.br/judge/pt/problems/view/1051

lines = ["3000"];

lines = parseFloat(lines[0]);

function calcularImposto(renda) {
    if (renda <= 2000) {
        return "Isento";
    } else {
        if (renda <= 3000) {
            return (renda - 2000) * 0.08;
        } else {
            if (renda <= 4500) {
                return 1000 * 0.08 + (renda - 3000) * 0.18;
            } else {
                return 1000 * 0.08 + 1500 + (renda - 4500) * 0.18;
            }
        }
    }
}

console.log(
    calcularImposto(lines) === "Isento"
        ? "Isento"
        : `R$ ${calcularImposto(lines).toFixed(2)}`
);
