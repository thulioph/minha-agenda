(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'http://localhost:3000',
    'API_URL_PROD': 'https://minhaagenda-api.herokuapp.com',
    'FACEBOOK': {
      'APP_ID': '1403969292947889'
    }
  };

  angular
  .module('Core.constant', [])
  .constant('ApiConfig', ApiConfig);

})();
