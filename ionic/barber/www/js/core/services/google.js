(function() {
  'use strict';

  function Google($rootScope, ApiConfig) {
    function _login() {
      gapi.load('client', _initGogleLogin);
    }

    function _initGogleLogin() {
      gapi.client.init({
        'apiKey': ApiConfig.GOOGLE.API_KEY,
        'discoveryDocs': [ApiConfig.GOOGLE.DOCS],
        'clientId': ApiConfig.GOOGLE.CLIENT_ID,
        'scope': 'profile'
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(_updateSigninStatus);
        _updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function _updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        // o usuário já está logado
        _makeApiCall();
      } else {
        // o usuário não está logado
        // este método irá abrir a janela de login
        gapi.auth2.getAuthInstance().signIn();
      }
    }

    function _makeApiCall() {
      gapi.client.people.people.get({
        resourceName: 'people/me'
      }).then(function(resp) {
        $rootScope.$broadcast('gl_ok', {
          user_info: resp.result
        });
      });
    }

    // ======

    return {
      login: _login
    }
  }

  Google.$inject = [
    '$rootScope',
    'ApiConfig'
  ];

  angular
  .module('Core.service')
  .service('Google', Google);
})();
