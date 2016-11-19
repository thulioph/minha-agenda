var express, mongoose, Contacts, router;

express = require('express');
mongoose = require('mongoose');
Contacts = require('../controllers/contacts.js');

router = express.Router();

router.get('/', function(req, res, next) {
  res.json(list());
});

router.post('/create', function(req, res, next) {
  res.json(create(req));
});

router.put('/edit/:id', function(req, res, next) {
  res.json(edit(req));
});

router.delete('/delete', function(req, res, next) {
  res.json(remove(req));
});

module.exports = router;

// ==========

function list() {
  Contacts.list();
}

function create(req) {
  Contacts.create(req);
}

function edit(req) {
  Contacts.edit(req);
}

function remove(req) {
  Contacts.delete(req);
}
