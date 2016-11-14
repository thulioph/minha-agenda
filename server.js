var http, fs, mongoose;

http = require('http'); // módulo para servidor http
fs = require('fs'); // módulo para ler/escrever arquivos
mongoose = require('mongoose'); // módulo para conectar com o mongodb

// criando o servidor http
// ==========
http.createServer(function(req, res) {
  var index;

  index = fs.readFileSync('server/index.html');

  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(index);
}).listen(3000);

console.log('Servidor rodando em: http://localhost:3000');


// conectando com o mongodb
// ==========
mongoose.connect('mongodb://localhost/cbtu');

var db;

db = mongoose.connection;

db.on('error', function(err) {
  console.log('Erro de conexão:', err);
});

db.on('open', function() {
  console.log('Conexão aberta!');
});

db.on('connected', function() {
  console.log('Conectado!');
});

db.on('disconnected', function() {
  console.log('Desconectado!');
});
