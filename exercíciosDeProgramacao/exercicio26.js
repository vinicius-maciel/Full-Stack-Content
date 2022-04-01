function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))