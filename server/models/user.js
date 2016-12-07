var mongoose, Schema, UserSchema;

mongoose = require('mongoose');

// criando um schema para o banco de dados
// ==========

Schema = mongoose.Schema;

UserSchema = new Schema ({
  name: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true,
    unique: true
  },
  gender: {
    type: String,
    default: ''
  },
  social: {
    type: String,
    default: ''
  },
  social_id: {
    type: String,
    default: ''
  },
  picture: {
    type: String,
    default: ''
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
