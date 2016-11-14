var mongoose, Schema, ContactSchema;

mongoose = require('mongoose');

// criando um schema para o banco de dados
// ==========

Schema = mongoose.Schema;

ContactSchema = new Schema ({
  name: {
    type: String,
    default: '',
    required: true
  },
  phone: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true
  },
  note: {
    type: String,
    default: ''
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
