function imprimirSoma(a, b){
    console.log(a + b);
}
let imp= imprimirSoma(10,50)
console.log(imp)

//soma com retorno de parametro
function soma(a, b=0){
    return a + b;
}
console.log(soma(20,5))