var express, mongoose, Users, router;

express = require('express');
mongoose = require('mongoose');
Users = require('../controllers/users.js');

router = express.Router();

router.get('/', function(req, res, next) {
  list(res);
});

router.post('/create', function(req, res, next) {
  create(req, res);
});

module.exports = router;

// ==========

function list(res) {
  Users.list(res);
}

function create(req, res) {
  Users.create(req, res);
}
