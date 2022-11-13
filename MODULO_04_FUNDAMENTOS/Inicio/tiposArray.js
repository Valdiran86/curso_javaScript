const valores  = [7.7, 8.9, 6.3, 9.2]//array forma literal
console.log(valores[0], valores[3]);

valores[4] = 10//dicionando valores no array
console.log(valores)

console.log(valores.length)
//função push() adiciona elementos no array
valores.push({id:'Valdiran', idade:36}, false, null, 'teste')

console.log(valores)

//função pop()retira o ultimo elemento de um array, não passa parameto
valores.pop()
console.log(valores)

//função Delete retir o elemento de um array, na posição que foi passada como parametro
delete valores[0]
console.log(valores)

console.log(typeof valores)//Em javaSript um array e um obijeto
