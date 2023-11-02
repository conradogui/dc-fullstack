// const numeros = [1, 2, 5, 10, 22, 18, 77, 100, 920, 1235]

// const pares = numeros.filter((num) => num % 2 === 0)

// console.log(pares)

const convidado = document.getElementById('convidado')
const btnSend = document.getElementById('btnSend')
const lista = document.getElementById('lista')
const filter = document.getElementById("filter")
const convidados = []

btnSend.addEventListener("click", () => {randerConvidados()})

function randerConvidados () {
    convidados.push(convidado.value)
    randerLista(convidados)
    convidado.value = ""
}

function randerConvidadosFiltrados() {
    const convidadosFiltrados = convidados.filter((convidado) => 
    convidado.toLowerCase().includes(filter.value.toLowerCase()))
    randerLista(convidadosFiltrados)
}

function randerLista(array) {
    const resultado = (lista.innerHTML = array.map((convidado) => {
        return `<li>${convidado}</li>`
    }).join(""))

    return resultado
}

filter.addEventListener("input", () => {randerConvidadosFiltrados()})
// document.addEventListener("keydown", (e) => {
//     if(e.key === "Enter") {
//         const item = document.createElement("li")
//         item.innerText = convidado.value
//         lista.appendChild(item)
//         convidado.value = ""
//     }
// })
