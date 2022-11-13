//Como criar objetos de forma literal
const prod1 = {}//Objeto vazil
prod1.nome = "celular"
prod1.preco = 3000.00
prod1.desconto = '20%'

console.log(prod1)

//Outra forma de criar objetos com os valores dentro das chaves.
prod2 ={
    nome: 'carro',
    cor: 'azul',
    tip: 'conversivel',
    propriedade:{
    portas: 4,
    rodasAro: 20,
    }
}
console.log(prod2)