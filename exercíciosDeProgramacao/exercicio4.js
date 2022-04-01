function receberNomeDoMes(numero) {
const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

return mapeamento[--numero];
}

console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes(4))
