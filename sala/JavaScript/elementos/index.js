const container = document.getElementById('container')
// const p = document.createElement('p')
// p.innerHTML = 'oi'
// // const pdv = container.appendChild(p)
// container.insertBefore(p, container.firstChild)

// container.removeChild(p)

const h1 = document.createElement('h1')
const p2 = document.createElement('p')

container.appendChild(p2)
p2.innerHTML = 'oii'
container.insertBefore(h1, container.firstChild)
h1.innerHTML = 'olaaa'

container.removeChild(p2)
container.removeChild(h1)


