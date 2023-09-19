const container = document.getElementById("container")
const p = document.createElement('p')
container.appendChild(p)
p.innerText = "texto"

p.setAttribute("class", "texto")//primeiro falo qual atributo vai ser e depois falo o nome

console.log(p.getAttribute("class"))
console.log(p.getAttribute("id"))

p.removeAttribute("id")