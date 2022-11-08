//Desafio de trocar os valores das variaveis

let a = 7;
let b = 94;

 let troca = a;
 a = b;
b = troca;
console.log("A variavel A tem novo valor de: " + a);
console.log("A variavel B tem novo valor de: " + b);


//Como trocar os valores de uma forma mais objetiva
console.log("A variavel A tem novo valor de: " + a);
console.log("A variavel B tem novo valor de: " + b);
[a,b] = [b,a];