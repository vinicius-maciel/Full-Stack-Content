function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))