// // function somar() {
// //     console.log( 5 + 5)
// // }

// // const somarArrow = () => {
// //     console.log(5 + 5)
// // }

// // const somarAnonimo = function() {
// //     console.log(5 + 5)
// // }

// // somar()
// // somarArrow()
// // somarAnonimo()
// // //parâmetros
// // function somarDeFora(a, b) {
// //     console.log(a + b)
// // }

// // somarDeFora(5, 5)


// function somarVogais (nome) {
//     let soma = 0
//     for(let i in nome) {        
//         if(nome[i] === "a" || nome[i] === "e" || nome[i] === "i" || nome[i] === "o" || nome[i] === "u") {
//             soma += 1
//         }
//     }    
//     console.log(soma)
// }

// somarVogais("paralelepipedo")

// console.log("////////////")
// const notas = [10, 5.5, 7.6, 3, 7.8,10, 5.5, 7.6, 3, 7.8]
// let soma2 = 0
// const media = (notas) => {
//     for(let nota of notas) {
//         soma2 += nota
//     }
//     console.log((soma2/notas.length).toFixed(1))
// }
// media(notas)
// console.log("////////////")
// const objeto = [{nome:"Giovana", idade:21, email: "gio@43"},
//         {nome:"Carlos", idade:43, email: "geo@43"},
//         {nome:"Guilherme", idade:76, email: "gui14@43"},
//         {nome:"Barbara", idade:22, email: "barb@43"} 
// ]
// const propriedades = (objeto) => {
//     for(let i in objeto) {
//         console.log(objeto[i])
//     }
// }
// propriedades(objeto)
// console.log("////////////")
// const alunos = [
//     {nome: "Guilherme", idade: 21, nota: 10},
//     {nome: "Joao", idade: 34, nota: 6},
//     {nome: "Carlos", idade: 54, nota: 4},
//     {nome: "Pedro", idade: 32, nota: 8},
//     {nome: "Marcos", idade: 76, nota: 9},
//     {nome: "Caio", idade: 23, nota: 3}
// ]

// const aprovado = (alunos) => {
//     for(let i in alunos) {
//         if(alunos[i].nota >= 7) {
//             console.log(alunos[i])
//         }
//     }
// }
// aprovado(alunos)
// console.log("/////////")
const vendas = [
    {
      id: 1,
      produto: "Computador",
      quantidade: 15,
      valor: 2900,
    },
    {
      id: 2,
      produto: "Monitor",
      quantidade: 10,
      valor: 400,
    },
    {
      id: 3,
      produto: "Cadeira",
      quantidade: 5,
      valor: 799,
    },
    {
      id: 4,
      produto: "Teclado",
      quantidade: 19,
      valor: 130,
    },
    {
      id: 5,
      produto: "Mouse",
      quantidade: 30,
      valor: 70,
    },
  ];
let soma = 0
const calculo = (vendas) => {
    for(let i in vendas) {
        soma += vendas[i].quantidade * vendas[i].valor        
    }
    console.log(`O valor total dos produtos é ${soma}`)
}
calculo(vendas)

let soma2 = 0
const mensal = (vendas) => {
    for(let i in vendas) {
        soma2 = vendas[i].quantidade * vendas[i].valor
        console.log(`O valor do produto ${i} é ${soma2}`)
    }
}
mensal(vendas)