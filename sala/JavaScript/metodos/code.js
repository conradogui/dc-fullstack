// const num = [1, 3 ,5 ,6, 7, 9, 7, 5, 8, 10, 4, 2]

// num.map((numero) => {
//     console.log(numero * 2)
// })

// console.log("//////////////////")

// const gc = [20, 32, 25, 33, 40, 15]

// gc.map((temp) => {
//     console.log(temp * 1.8 + 32)
// })
// console.log("//////////////////")

// num.map((numero) => {
//     console.log(numero ** 2)
// })

// console.log("//////////////////")

// num.map((numero) => {
//     if(numero % 2 === 0) {
//         console.log(numero)
//     }
// })

// console.log("//////////////////")

// const palavras = ["Bonito", "Cachorro", "Guilherme"]

// palavras.map((palavra) => {
//     console.log(palavra.length)
// })


// function squareReturn(arr) {
//     const nume = arr.map((numero) => numero ** 2)
//     return nume
// }

// console.log(squareReturn(num))

// function pares(arr) {
//     const newPar = []
//     arr.map((numero) => {
//     if(numero % 2 === 0) {
//         return newPar.push(numero)
//     }
// })
// return newPar
// }
// console.log(pares(num))

// function words(arr) {
//     const pala = arr.map((palav) => {
//         const newPala = palav.length
//         return newPala
//     })
//     return pala
// }
// console.log(words(palavras))

const quadras = [
    {largura: 20, altura:30},
    {largura: 45, altura:23},
    {largura: 10, altura:12},
    {largura: 78, altura:45},
    {largura: 36, altura:12},
]

function area(arr) {
    const newArr = []
    arr.map((num) => {
        const areas = num.altura * num.largura
        return newArr.push(areas)
    })
    return newArr
}

console.log(area(quadras))

console.log("//////////")

const palavras = ["Bonito", "Cachorro", "Guilherme"]

function returnVogal(arr) {
    const vogais = []
    const vogal = arr.map((letra) => {
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            return vogais.push(vogal)
        }
        return vogais
    })
}

console.log(returnVogal(palavras))