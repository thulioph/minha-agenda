(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'https://minhaagenda-api.herokuapp.com'
  };

  angular
  .module('Core.config', [])
  .constant('ApiConfig', ApiConfig);

})();
