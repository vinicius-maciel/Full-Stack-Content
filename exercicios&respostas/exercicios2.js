function triangulos (lado1, lado2, lado3) {
    if  (lado1 == lado2 && lado1 == lado3){
    return "Equilátero" 

    } if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    return "Isósceles" 
    
    } else  { 
    return "Escaleno"
    }

}    
      
console.log(triangulos(2,2,2))
console.log(triangulos(2, 3, 3))
console.log(triangulos(2, 3, 4))


 