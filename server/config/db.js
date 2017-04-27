var mongoose, db;

mongoose = require('mongoose');

// conectando com o mongodb
// ==========

// mongoose.connect('mongodb://heroku_n4v2w94s:51guuvojkv9ud933r9qiq79ui0@ds157987.mlab.com:57987/heroku_n4v2w94s');
mongoose.connect('mongodb://localhost/minha-agenda');

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


// Encerra a conexão com o mongoose
// caso o processo do Node pare.
// ==========

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('A conexão com o mongoose foi encerrada.')
    process.exit(0);
  });
});

require('../models/contact.js');
require('../models/user.js');
