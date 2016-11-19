var mongoose, Contact, obj, db;

mongoose = require('mongoose');
db = require('../config/db.js');
Contact = mongoose.model('Contact');

function add(req, res) {
  console.log(req.body);

  var model;

  model = new Contact(req.body);

  model.save(function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      return err;
    } else {
      console.log('Novo contato inserido:', data);
      return data;
    }
  });
}

function listAll() {
  var query;

  query = {};

  Contact.find(query, function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      return err;
    } else {
      console.log('Listagem:', data);
      return data;
    }
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
      return err;
    } else {
      console.log('Contato atualizado com sucesso:', data);
      return data;
    }
  });
}

function remove(req, res) {
  var query;

  query = {};

  Contact.remove(query, function(err, data) {
    if (err) {
      console.log('Ocorreu um erro:', err);
      return err;
    } else {
      console.log('Contato deletado com sucesso:', data);
      return data;
    }
  });
}

obj = {
  create: add,
  list: listAll,
  edit: edit,
  delete: remove
};

module.exports = obj;
