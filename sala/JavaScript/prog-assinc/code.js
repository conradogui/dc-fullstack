/*
Métodos HTTP:
GET - Buscar
POST - Enviar
DELETE - Deletar
PATCH - Substituir parcialmente
PUT - Substituir completamente
--------------------------
Códigos HTTP:
100 ~ 199 - informativa
200 ~ 299 - Bem sucedida
300 ~ 399 - Redirecionamento
400 ~ 499 - Erro do cliente
500 ~ 599 - Erro do servidor
*/
// const nome = "Miriam"
// const saudacao = `Olá, meu nome é ${nome}!`
// console.log(nome)

// const result = fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => json)
const listaUl = document.getElementById("lista")
const btnList = document.getElementById("btnList")

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
}

function criaLi(name,img) {
    const resultHtml = (listaUl.innerHTML += `
    <ul class="even:bg-[#f2f2f2] odd:bg-white">
        <li class="p-3">${name}</li>
        <img src="${img}" alt="" style="width: 200px;">
    </ul>
    `)
    return resultHtml
}


async function renderiza() {
    const products = await getProducts()
    products.map((product) => {
        const data = criaLi(product.title, product.image)
    })
}

btnList.addEventListener("click", (e) => {
    e.preventDefault
    renderiza()
})