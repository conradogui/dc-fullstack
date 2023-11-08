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


function editarConvidado(id) {
    const convidado = convidados.find((convidado, index) => index === id)
    inputName.value = convidado.name
}

function alteraNome(id) {
    
}


btnSend.addEventListener("click", (e) => {
    e.preventDefault()
    alteraNome()
})

function deletarConvidado(id) {
    convidados.splice(id, 1)
    content.innerHTML = ""
    convidados.map((convidado, index) => {
        return (content.innerHTML += `
        <li>
            ${convidado.name}
                <div class="btns-action">
                    <button onclick="editarConvidado(${index})">Editar</button>
                    <button onclick="deletarConvidado(${index})">Excluir</button>
                </div>
        </li>
        `)
    })
}

window.addEventListener("load", () => {
    convidados.map((convidado, index) => {
        return (content.innerHTML += `
        <li>
            ${convidado.name}
                <div class="btns-action">
                    <button onclick="editarConvidado(${index})">Editar</button>
                    <button onclick="deletarConvidado(${index})">Excluir</button>
                </div>
        </li>
        `)
    })
})