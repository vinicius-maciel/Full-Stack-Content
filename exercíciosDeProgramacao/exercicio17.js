function SomarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length

    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + SomarNumeros(numeros.slice(1))
}

console.log(SomarNumeros([10, 10, 10]))
console.log(SomarNumeros([15, 15, 15, 15]))