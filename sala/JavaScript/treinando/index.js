/**
 * splice - ok
 * find - ok
 * filter
 * foreach
 * map
 * includes
 * reduce
 */

const animais = ["vaca", "cachorro", "gato", "pato", "vaca"];
const numeros = [0, -15, -2300, 1, 150, 43000];
// console.log(animais);
// acrescenta um novo valor no index 1
// animais.splice(1, 0, "girafa");
// console.log(animais);
// remove o valor do index 3 e insere o valor "rato" no lugar
// animais.splice(3, 1, "rato");
// console.log(animais);
// remove o valor do index 1 e não acrescenta nada
// animais.splice(0, 1);
// console.log(animais);
// const animaisFind = animais.find((animal) => animal === "vaca");
// const numeroMaiorQueZero = numeros.find((numero) => numero > 0);
// console.log(numeroMaiorQueZero);
const produtos = [
  {
    nome: "Bola futebol",
    categoria: "esporte",
  },
  {
    nome: "Blusa social",
    categoria: "social",
  },
  {
    nome: "Bola vôlei",
    categoria: "esporte",
  },
  {
    nome: "Sapato social",
    categoria: "calcados",
  },
];
// const animaisFilter = animais.filter((animal) => animal === "vaca");
// console.log(animaisFilter);
// const produtosFiltrados = produtos.filter((produto) =>produto.categoria === "social" || produto.categoria === "calcados");
// console.log(produtosFiltrados);
const produtosFiltrados = produtos.filter((produto) => produto.nome.includes("Bola"))
console.log(produtosFiltrados)