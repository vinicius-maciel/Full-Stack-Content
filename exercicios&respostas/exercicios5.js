function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace (".", "," )}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.3 + 0.4)