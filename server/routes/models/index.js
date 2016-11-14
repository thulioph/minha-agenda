var fs;

fs = require('fs');

// percorro o diretório dos models e realizo o require em cada modelo
// ==========

fs.readdirSync('./models').forEach(function(file) {
  if (file !== 'index.js') {
    require('./' + file);

    console.log('Modelo adicionado:', file);
  }
});
