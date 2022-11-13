//Armazenando função em variaveis, e criando uma função anonimas
const imprimirSoma= function(a, b){
    console.log(a + b);

}
imprimirSoma(10,20);

// armazenando uma função arrow em uma variavel
const soma = (a,b)=>{
    return a + b;
}
console.log("A soma da função é: " + soma(50,50))

//função com retorno implicito, são funções de apenas uma linha da
const sub=(a,b)=> a - b;
console.log("A sub da função é: " + sub(50,20))
