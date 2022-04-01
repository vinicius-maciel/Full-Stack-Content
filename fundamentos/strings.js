const escola = "Cod3r"

console.log (escola.charAt (4)) // Selecionar determinado caractere dentro da string
console.log (escola.charAt(5)) // Não achou o caractere e não deu erro
console.log (escola.charCodeAt (3)) // Código do caractere, tabela unicode
console.log (escola.indexOf ("3")) // A partir de um caractere da string pega-se o índice do caractere 

console.log (escola.substring (1)) // Chamada índice inicial
console.log (escola.substring (0, 3)) // Chamada índice inicial e final

console.log ("Escola ".concat (escola).concat ("!")) // unir duas strings 
console.log ("Escola " + escola +  "!") // outras forma de concat
console.log ("3" + 2)

console.log (escola.replace (3, "e")) // substitui o 3 pelo "e"

console.log (escola.replace (/\w/g, "e")) //rejex /\w/g substitui todas as letras e digitos por "e"

console.log ("Ana,Maria,Pedro".split(",")) // Array separador

