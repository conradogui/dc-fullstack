// const obj = [
//     {nome: "Guilherme", idade: 20, sexo: "masculino"},
//     {nome: "Joana", idade: 45, sexo: "Feminino"},
//     {nome: "Marcos", idade: 34, sexo: "masculino"},
//     {nome: "Pedro", idade: 78, sexo: "masculino"},
//     {nome: "Marcia", idade: 10, sexo: "Feminino"},
// ]

// const nomes = obj.map(tira => tira.nome)

// const nomesRetirados = nomes.join()
// console.log(nomesRetirados)

const nomes = ["guilherme", "joao", "pedro", "maria", "mariana"]

const tamanhoNome = elemento => elemento.length >= 10

console.log(nomes.some(tamanhoNome))