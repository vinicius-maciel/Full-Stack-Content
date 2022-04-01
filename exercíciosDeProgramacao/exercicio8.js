function multiplicar(numeroA, numeroB) {
let resultado = 0

for(let i = 0; i < numeroB; i++)
resultado += numeroA

return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))