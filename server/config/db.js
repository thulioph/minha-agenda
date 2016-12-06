var mongoose, db;

mongoose = require('mongoose');

// conectando com o mongodb
// ==========

mongoose.connect('mongodb://localhost/cbtu');

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
