function venderFruta (fruta) {
    switch (fruta) {
        case "maçã": 
        console.log("Não vendemos esta fruta aqui.")
           break
        case "kiwi":
        console.log("Estamos com escassez de kiwi.")
           break
        case "melância":
            console.log("Aqui está, custa R$3,80 o quilo")
            break
        default:
            console.log("Erro, fruta inválida.")
        
        }
    }

venderFruta("maçã")
venderFruta("kiwi")
venderFruta("melância")
venderFruta("alcatra")