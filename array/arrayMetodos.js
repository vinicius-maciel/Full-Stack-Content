const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento!
console.log(pilotos)

pilotos.push('Vertstappen') // adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O último não ínclui(4)
console.log(algunsPilotos2)

