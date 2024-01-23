const fs = require("fs");
const moduleFS = require("./exercicio01");
/*
- lendo o conteúdo do arquivo. Se não for informado o enconding, será retornado
 em formato de buffer, inserindo o enconding, 'utf8', após o path do arquivo, 
 retorna o conteudo corretamente, assim como está no arquivo.
*/

moduleFS.lerArquivo("texto.txt")

moduleFS.escreverArquivo("texto.txt", "Olá")