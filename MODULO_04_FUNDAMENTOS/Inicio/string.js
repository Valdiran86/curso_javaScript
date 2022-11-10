// String é uma cadeia de caracteres, que é escrita entre '' ou ""
const escola = "cod3r";

console.log(escola.charAt(4));//charAt(4)mostra o caracter que está na posição 4 da Strng

console.log(escola.charCodeAt(3))//charCode()mostra o valaor do caracter unicode na tabela Asci
console.log(escola.indexOf('3'))//indexOf()mostra se um caracter existem na String
console.log(escola.substring(1))//mostra os caractere apartir do número inserido, a contagem comerça apartir do 0
console.log(escola.substring(0,3))//mostra os caractere de 0 a 3

console.log('Escola '. concat(escola).concat("!"))//concatena strings com variavaeis
console.log(escola.replace(3, 'e'))//substitui o primeiro valor passa como parametro, pelo segundo

console.log('paulo, joão , maria, carlos'.split(','))//Transforma uma String em um array



