
const http = require('http'); //imoprta o modulo

const hostname = '127.0.0.1';// configura o ip
const port = 3000;// configura a porta

//utiliza o modulo http e chama a função createServer
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nMeu nome é Guilherme ola');
});

//Instancia o createServer e chama o método listen () que sobe o servidor em uma ip e porta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});