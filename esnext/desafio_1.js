const fs = require('fs')
const path = require('path')

function desafio1(caminho) {
    console.log('Executando Desafio 1')
    return new Promise(function (resolve) {
        setTimeout(function () {
            fs.readFile(caminho, 'utf-8', (_, conteudo) => {
                resolve(conteudo.toString())

            })
        }, 2000)
    })
}


const caminho = path.join(__dirname, 'dados.txt')




desafio1(caminho)
    //.then(conteudo => console.log(conteudo))



    .then(conteudo => conteudo.split('\n'))
    //.then(linhas => console.log(linhas[1]))
    //.then(linhas => console.log(linhas.length))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
