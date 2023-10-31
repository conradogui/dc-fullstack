const cep = document.getElementById("cep")
const btn = document.getElementById("btn-search")
const result = document.getElementById("result")

function createHtml(localidade, uf, bairro, logradouro, cep ) {
    const html = (result.innerHTML = `
    <p>Cidade: ${localidade}</p>
    <p>Estado: ${uf}</p>
    <p>Bairro: ${bairro}</p>
    <p>Logradouro: ${logradouro}</p>
    <p>Cep: ${cep}</p>
    `)
    return html
}
async function getAddress(cep) {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await result.json()
    console.log(data)
    return data
}

async function renderAddress() {
    const address = await getAddress(cep.value)
    createHtml(address.localidade, address.uf, address.bairro, address.logradouro, address.cep )
}
btn.addEventListener("click", renderAddress)