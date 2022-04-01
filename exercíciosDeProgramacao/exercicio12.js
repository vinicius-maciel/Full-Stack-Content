function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]

    
    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descrição: "Não preenchido"
    
    
}, "descrição"))

console.log(Object.is(removerPropriedade))
