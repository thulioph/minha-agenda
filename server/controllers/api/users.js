var mongoose,User, obj, db;

mongoose = require('mongoose');
db = require('../../config/db.js');
User = mongoose.model('User');

function add(req, res) {
  var model;

  console.log('BOOOODDDY- >', req.body);

  model = new User(req.body);

  model.save(function(err, data) {
    if (err) {
      console.log('ERRRORRR- >', err);
      res.json(err);
    } else {
      console.log('SUUCESSSS- >', data);
      res.json(data);
    }
  });
}

function listAll(res) {
  var query;

  query = {};

  User.find(query, function(err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}

obj = {
  create: add,
  list: listAll
};

module.exports = obj;
