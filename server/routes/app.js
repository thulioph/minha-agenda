var http, db, Contact;

http = require('http');
db = require('config/db');
Contact = require('controllers/contacts');


// Criando o servidor http
// ==========

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });

  switch(req.url) {
    case '/contacts/create':
      Contact.create(req, res);
    break;

    case '/contacts/retrieve':
      Contact.retrieve(req, res);
    break;

    case '/contacts/edit':
      Contact.edit(req, res);
    break;

    case '/contacts/delete':
      Contact.delete(req, res);
    break;

    default: res.end('Rota não encontrada.');
  }

}).listen(3000);

console.log('Server rodando em -> http://localhost:3000/');
