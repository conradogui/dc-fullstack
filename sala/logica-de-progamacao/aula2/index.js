
// const num = -3

// if(num === 0) {
//     console.log('Numero:', num)
// } else if( num > 0) {
//     console.log('Valor positivo', num)
// } else {
//     console.log('Valor negativo', num)
// }

// if(num === 0) {
//     console.log('Valor nulo')
// } else if (num % 2 === 0) {
//     console.log('Valor par', num)
// } else {
//     console.log('Número ímpar', num)
// }

//peso / altura elevado a 2

const peso = 65
const altura = 1.74
const resultado = (peso / (altura * altura)).toFixed(2)

if(resultado < 17) {
    console.log('Muito abaixo do peso', resultado)
}else if(resultado >= 17 && resultado < 18.50) {
    console.log('Abaixo do peso', resultado)
} else if(resultado >= 18.50 && resultado < 25) {
    console.log('Peso normal', resultado)
} else if(resultado >= 25 && resultado < 30) {
    console.log('Acima do peso', resultado)
} else if(resultado >= 30 && resultado < 35) {
    console.log('Obesidade 1', resultado)
} else if (resultado >= 35 && resultado < 40) {
    console.log('Obesidade 2', resultado)
} else {
    console.log('Obesidade 3', resultado)
}