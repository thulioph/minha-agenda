var http, mongoose;

http = require('http'); // módulo para servidor http
mongoose = require('mongoose'); // módulo para conectar com o mongodb

// conectando com o mongodb
// ==========
mongoose.connect('mongodb://localhost/cbtu');

var db;

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


// criando um schema para o banco de dados
// ==========
var Schema, ContactSchema, Contact;

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

Contact = mongoose.model('Contact', ContactSchema);


// inserindo os dados no banco
// ==========

var data, model, msg;

data = {
  email: "talita@gmail.com",
  name: "Talita Albuquerque",
  note: "Ela é linda <3",
  phone: "81988755593"
};

// model = new Contact(data);

// model.save(function(err, data) {
//   if (err) {
//     console.log('Ocorreu um erro:', err);
//   } else {
//     console.log('Novo contato inserido:', data);
//   }
// });


// criando o servidor http
// ==========

function checkUrl(route, response) {
  if (route === '/contacts/create') {
    model = new Contact(data);

    model.save(function(err, data) {
      if (err) {
        console.log('Ocorreu um erro:', err);
        msg = 'Error: ' + err;
      } else {
        console.log('Novo contato inserido:', data);
        msg = 'Contato inserido: ' + JSON.stringify(data);
      }

      response.end(msg);
    });
  } else {
    response.end('Rota não encontrada!');
  }
}

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  checkUrl(req.url, res);
}).listen(3000);

