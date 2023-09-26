const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const modal = document.getElementById("modal")
const modal1 = document.getElementById("open-modal")

function changeBackgrondColor() {
    container1.classList.toggle("bgBlue")
    container2.classList.toggle("bgBlue")
}
function mudaFundo() {
    container1.classList.toggle("bgBlack")
    container2.classList.toggle("bgBlack")
}

function openModal() {
    modal.classList.remove("hidden")
    modal.classList.add("show")
}
function closeModal() {
    modal.classList.remove("show")
    modal.classList.add('hidden')
}

modal.addEventListener('click', closeModal)

modal1.addEventListener('click',openModal )

