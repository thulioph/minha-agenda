var mongoose, ObjectId, Contact, obj, db;

mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;
db = require('../config/db.js');
Contact = mongoose.model('Contact');

function add(req, res) {
  var model;

  model = new Contact(req.body);

  model.save(function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

function listAll(res) {
  var query;

  query = {};

  Contact.find(query, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

function listOne(req, res) {
  var query;

  query = req.params.id;

  Contact.findById(query, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

function edit(req, res) {
  var query, mod;

  query = { _id: req.params.id };
  mod = req.body;

  Contact.update(query, mod, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

function remove(req, res) {
  var query;

  query = { _id: req.params.id };

  Contact.remove(query, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

obj = {
  create: add,
  list: listAll,
  get: listOne,
  edit: edit,
  delete: remove
};

module.exports = obj;
