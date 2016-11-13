var express, http, path, app, server;

express = require('express');
http = require('http');
path = require('path');

app = express();
app.set('port', process.env.PORT || 8899);

app.use('/css', express.static(path.join(__dirname, '/app/css/')));
app.use('/js', express.static(path.join(__dirname, '/app/js/')));
app.use('/templates', express.static(path.join(__dirname, '/app/views/templates/')));
app.use('/libs/angular', express.static(path.join(__dirname, '/app/vendor/angular/')));
app.use('/libs/milligram', express.static(path.join(__dirname, '/app/vendor/milligram/dist/')));

server = http.createServer(app);


// definindo as rotas
// ==========

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/views/index.html');
});

app.get('/contatos', function(req, res) {
  res.sendFile(__dirname + '/app/views/contatos.html');
});


// Startando o server
// ==========

server.listen(app.get('port'), function() {
  console.log('Servidor rodando na porta: ', app.get('port'));
});
