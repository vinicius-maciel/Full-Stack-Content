console.log (Math.ceil (6.1))

const obj1 = {}
obj1.nome = "Bola"
// obj1["nome"] = "Bola2"
console.log (obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function () {
        console.log ("Exec...")
    }
    // this - nome associado ao objeto que for criado a partir dessa função
    // ~~ receber o atributo nome por parâmetro e atribuir this.nome visível (público)

}

const obj2 = new Obj ("Cadeira")
const obj3 = new Obj ("Mesa")
console.log (obj2.nome)
console.log (obj3.nome)
obj3.exec ()