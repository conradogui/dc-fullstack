const fs = require("fs");

/*
- lendo o conteúdo do arquivo. Se não for informado o enconding, será retornado
 em formato de buffer, inserindo o enconding, 'utf8', após o path do arquivo, 
 retorna o conteudo corretamente, assim como está no arquivo.
*/

const lerArquivo =(pathArquivo) => {
  fs.readFile(pathArquivo, "utf8", (err, data) => {
    if (err) {
      console.log("Erro ao ler o arquivo!");
      return;
    }

    console.log("Conteúdo:", data);
  });
}

const escreverArquivo = (pathArquivo, conteudo) => {
  fs.writeFile(pathArquivo, conteudo, "utf8", (err) => {
    if (err) {
      console.log("Erro ao ler arquivo:", err);
    }
    console.log("Conteudo inserido");
  });
};


module.exports = {lerArquivo, escreverArquivo}