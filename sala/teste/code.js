const inputName = document.getElementById("name")
const btnSend = document.getElementById("btn-send")
const content = document.getElementById("content")


const convidados = [
    {
        name: "Guilherme"
    },
    {
        name: "Joao"
    },
    {
        name: "Pedro"
    },
    {
        name: "Maria"
    },
    {
        name: "Carla"
    },
    {
        name: "Mariana"
    },
    {
        name: "Carlos"
    },
]

let editingGuestId = null

//quando apertar o botao de editar essa função ira pegar o nome da lista e jogar no inputName
function getConvidado(id) {
    const convidado = convidados.find((element, index) => index === id )
    inputName.value = convidado.name
    editingGuestId = id //está sendo editado
}

function editandoConvidado() {
    if(editingGuestId !== null) {
        convidados[editingGuestId].name = inputName.value
        inputName.value = ""
        editingGuestId = null
        alteraConvidado()
    } else {
        const novoNome = inputName.value
        if(novoNome) {
            convidados.push({name: novoNome})
            inputName.value = ""
            alteraConvidado()
        }
    }
}

function deletaConvidado(id) {
    convidados.splice(id, 1)
    alteraConvidado()
}

function alteraConvidado() {
    content.innerHTML = ""
    convidados.map((convidado, index) => {
        return content.innerHTML += `
            <li>
                ${convidado.name}
                <div class="btns-action">
                    <button onclick="getConvidado(${index})">Editar</button>
                    <button onclick="deletaConvidado(${index})">Excluir</button>
                </div>
            </li>
        `
    })
}

window.addEventListener("load", () => {
    alteraConvidado()
})

btnSend.addEventListener("click", e => {
    e.preventDefault()
    editandoConvidado()
})