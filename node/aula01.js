//importando o modulo path nativo do Node.js
// require vem do CommonJs. É como o Node.js importa e exporta módulos ('arquivos')
var path = require('path');

var fileName = path.basename('teste/teste.js')

console.log('Nome do arquivo', fileName);

var folder = path.dirname('teste.js')

console.log('Nome da pasta', folder);