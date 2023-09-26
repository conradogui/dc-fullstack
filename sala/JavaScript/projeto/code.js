const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("result")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let multiplica = numero1 * numero2
    resultado.innerText = multiplica
})