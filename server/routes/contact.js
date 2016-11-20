var express, mongoose, Contacts, router;

express = require('express');
mongoose = require('mongoose');
Contacts = require('../controllers/contacts.js');

router = express.Router();

router.get('/', function(req, res, next) {
  list(res);
});

router.get('/:id', function(req, res, next) {
  getById(req, res);
});

router.post('/create', function(req, res, next) {
  create(req, res);
});

router.put('/edit/:id', function(req, res, next) {
  edit(req, res);
});

router.delete('/delete/:id', function(req, res, next) {
  remove(req, res);
});

module.exports = router;

// ==========

function list(res) {
  Contacts.list(res);
}

function getById(req, res) {
  Contacts.get(req, res);
}

function create(req, res) {
  Contacts.create(req, res);
}

function edit(req, res) {
  Contacts.edit(req, res);
}

function remove(req, res) {
  Contacts.delete(req, res);
}
