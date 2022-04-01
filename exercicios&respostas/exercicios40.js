function conceituarNotas(notas){
    let conceitos = []
    for(let i = 0; i < notas.length; i ++){
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push("D")
        } else if(notas[i]>=5 && notas[i]<=6.9){
            conceitos.push("C")
        } else if(notas[i]>=7 && notas[i]<8.9){
            conceitos.push("B")
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push("A")
        } else {
            conceitos.push("Nota inválida")
        }
    }
    return conceitos
}

let notas = [10, 13, 3, 6, 9, 8.4, 5.3]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)