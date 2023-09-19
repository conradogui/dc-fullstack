/* selecionar elementos com JS
* document.getElementById('id do elemento')
*document.getElementsByClassName('nome da clase')
*document.getElementsByTagName('nomde da tag')
*document.querySelector('query da busca')
*document.querySelectorAll('todos os query da busca')
*
*/
const texto = document.getElementById('text')
console.log(texto)

const elemento = document.querySelector('.container')

const contar = () => {
    elemento.innerHTML = `
<ol>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ol>`
}
contar()