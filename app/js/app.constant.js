(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'https://minhaagenda-api.herokuapp.com'
  };

  angular
  .module('Core.constant', [])
  .constant('ApiConfig', ApiConfig);

})();
