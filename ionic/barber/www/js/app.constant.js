(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'http://localhost:3000',
    'API_URL_PROD': 'https://minhaagenda-api.herokuapp.com'
  };

  angular
  .module('Core.constant', [])
  .constant('ApiConfig', ApiConfig);

})();
