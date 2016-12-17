(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'http://localhost:3000',
    'API_URL_PROD': 'https://minhaagenda-api.herokuapp.com',
    'FACEBOOK': {
      'APP_ID': '1403969292947889'
    },
    'GOOGLE': {
      'API_KEY': 'AIzaSyDTVFJVhqRTx0-EZADEmMz2giGlyRbzRbw',
      'DOCS': 'https://people.googleapis.com/$discovery/rest?version=v1',
      'CLIENT_ID': '490787298478-l9t0v16t4es8h8hnset7h18nab6l1gju.apps.googleusercontent.com',
    }
  };

  angular
  .module('Core.constant', [])
  .constant('ApiConfig', ApiConfig);

})();
