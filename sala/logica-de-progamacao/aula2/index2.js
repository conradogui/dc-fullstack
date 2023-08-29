//ex1
const ano = 2020

if( ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
    console.log('Ano é bisexto', ano)
} else {
    console.log('Ano não é bisexto', ano)
}
//ex2
const lado1 = 6
const lado2 = 3
const lado3 = 90

if(lado1 + lado2 > lado3 || lado2 + lado3 > lado1 || lado1 + lado3 > lado2) {
    console.log('É possível formar um triangulo')
} else {
    console.log('Não é possível formar o triangulo')
}
//ex3
const produto = 120

if (produto >= 100) {
    const prodCDesconto = produto * 0.1
    console.log('O preço do produto é:', produto - prodCDesconto)
} else {
    console.log('O preço do produto é:', produto)
}