var express, router, mongoose, Contact;

express = require('express');
mongoose = require('mongoose');
Contact = require('../controllers/contacts.js');

router = express.Router();

// Get contacts
// router.get('/', function(req, res, next) {
//   res.json(Contact.create(req));
// });

router.post('/create', function(req, res, next) {
  res.json(create(req));
});

module.exports = router;

// ==========

function create(req) {
  Contact.create(req);
}

// var http, db, Contact;

// http = require('http');
// db = require('./config/db.js');
// Contact = require('./controllers/contacts.js');


// // Criando o servidor http
// // ==========

// http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/html;charset=utf-8',
//     'Access-Control-Allow-Origin': '*'
//   });

//   switch(req.url) {
//     case '/contacts/create':
      // Contact.create(req, res);
//     break;

//     case '/contacts/retrieve':
//       Contact.retrieve(req, res);
//     break;

//     case '/contacts/edit':
//       Contact.edit(req, res);
//     break;

//     case '/contacts/delete':
//       Contact.delete(req, res);
//     break;

//     default: res.end('Rota não encontrada.');
//   }

// }).listen(3000);

// console.log('Server rodando em -> http://localhost:3000/');

