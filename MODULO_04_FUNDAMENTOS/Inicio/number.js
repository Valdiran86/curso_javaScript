//Tipos de valores numericos
/**formas de declarar uma variavel do tipo number */
const pesso1 = 1.0

const pesso2 = Number("2.0")
// verificar se um número é  um valor inteiro
console.log(Number.isInteger(pesso1))//isInteger verifica se o número e inteiro
console.log(Number.isInteger(pesso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * pesso1 + avaliacao2 * pesso2
const media = total / (pesso1 + pesso2)

console.log(media.toFixed(2))//toFixed defina a contidade de casas decimais

console.log(media.toString())//toString transforma, numeros em String
console.log(media.toString(2))//passando o valor 2 no (toString) transforma, numeros em binario
console.log(typeof media)//verifica o tipo da variavel