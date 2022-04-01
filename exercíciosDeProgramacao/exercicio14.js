function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]])
    
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissão: "Desenvolvedora de software"
}))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))
