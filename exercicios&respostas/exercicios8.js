let stringPontuacoes = "30, 20, 32, 45, 50, 61, 29, 33"

function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qntquebradeRecords = 0
    let piorJogo = 1 
    let maiorPontuacao = pontuacoes [0]
    let menorPontuacao = pontuacoes [0]

    for (let i = 1; i < pontuacoes.lenght; i++) {
        if (pontuacoes[i]> maiorPontuacao) {
            maiorPontuacao = pontuacoes[í]
            qntquebradeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+i;
        }
    }
    return [qntquebradeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))