/**
 * Adicionar uma class => 
    element.classList.add(className)
 * Remover uma class => 
    element.classList.remove(className)
 * Remove ou adiciona uma class => 
    element.classList.toggle(className)
 * Adiciona um valor a uma propriedade CSS
 * element.style.property = value
 * Ex: element.style.color = 'red'
 */

const container = document.getElementById("container")
// const p = document.createElement("p")
// container.appendChild(p)
// p.innerText = "Texto aqui"

// p.classList.add("hidden")
// p.classList.remove("hidden")
// p.classList.add("show")

// p.classList.toggle("show")//se voce tiver uma coisa o toogle vai tirar, caso não tenha, ele adiciona... ele faz a ação contrária

// p.style.color = 'blue'

const p = document.createElement("p")
const h1 = document.createElement("h1")
container.appendChild(p)
container.appendChild(h1)
p.innerText = "Cabeça"
h1.innerText = "Natal"

p.classList.add("par")
h1.classList.add("impar")
