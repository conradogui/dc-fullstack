// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // for(const num of numeros) {
// //     for(const nub in numeros) {
// //         console.log(num * nub)
// //     }
// // }

// // for(let i = 10; i > 0; i--){
// //     console.log(i)
// // }

// const notas = [
//     {
//         materia: 'Matemática',
//         nota: '7'
//     },
//     {
//         materia: 'Português',
//         nota: '8'
//     },
//     {
//         materia: 'Química',
//         nota: '5'
//     }
// ]
// let soma = 0//declarei fora pois irei chamar ela fora novamente

// for (const index in notas) {
//     soma += Number(notas[index].nota)
// }

// const media = (soma / notas.length).toFixed(2)

// console.log(media)

// const nome = "guilherme"

// for(const letra of nome) {
//     console.log(letra)
// }

// const numeros = [1, 5, 7, 8,6, 55, 4, 6, 7,4,3 ,5, 6,6]

// let soma = 0

// for(const num of numeros) {
//     soma += num
// }

// console.log(soma)
const clientes = [
    {
        nome: 'Cliente 1',
        valor: 450,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 2',
        valor: 100,
        quantidade: 10,
        produto: 'Produto 2'
    },
    {
        nome: 'Cliente 3',
        valor: 250,
        quantidade: 5,
        produto: 'Produto 1'
    },
    {
        nome: 'Cliente 4',
        valor: 140,
        quantidade: 8,
        produto: 'Produto 4'
    },
]
let soma = 0 
let soma2 = 0

for(const cliente of clientes) {
    console.log(`O valor total gasto pelo cliente foi ${cliente.quantidade * cliente.valor}`)
    soma += (cliente.quantidade * cliente.valor)
    soma2 += cliente.quantidade
}
console.log(`A quantidade total de itens foi ${soma2}`)

console.log(`O valor de todos juntos foi ${soma}`)

