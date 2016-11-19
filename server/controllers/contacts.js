var mongoose, Contact, msg, obj, db;

mongoose = require('mongoose');
db = require('../config/db.js');
Contact = mongoose.model('Contact');

function add(req, res) {
  console.log(req.body);

  var data, model;

  // data = {
  //   email: "maconha@gmail.com",
  //   name: "Maria Joana",
  //   note: "Dá uma lombra massa..",
  //   phone: "+5581988755593"
  // };

  model = new Contact(req.body);

  model.save(function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      // msg = 'Error: ' + err;
      return err;
    } else {
      console.log('Novo contato inserido:', data);
      // msg = 'Contato inserido: ' + JSON.stringify(data);
      return data;
    }

    res.end(msg);
  });
}

function list(req, res) {
  var query;

  query = {};

  Contact.find(query, function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      msg = JSON.stringify(err);
    } else {
      console.log('Listagem:', data);
      msg = JSON.stringify(data);
    }

    res.end(msg);
  });
}

function edit(req, res) {
  var query, mod, optional;

  query = {};
  mod = {};
  optional = {};

  Contact.update(query, mod, optional, function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      msg = 'Error: ' + err;
    } else {
      console.log('Contato atualizado com sucesso:', data);
      msg = 'Contato alterado: ' + JSON.stringify(data);
    }

    res.end(msg);
  });
}

function remove(req, res) {
  var query;

  query = {};

  Contact.remove(query, function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      msg = 'Error: ' + err;
    } else {
      console.log('Contato deletado com sucesso:', data);
      msg = 'Contato deletado: ' + JSON.stringify(data);
    }

    res.end(msg);
  });
}

obj = {
  create: add,
  list: list,
  edit: edit,
  delete: remove
};

module.exports = obj;
