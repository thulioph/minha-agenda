(function() {
  'use strict';

  function Google($rootScope) {
    function _login() {
      gapi.load('client', _initGogleLogin);
    }

    function _initGogleLogin() {
      gapi.client.init({
        'apiKey': 'AIzaSyDTVFJVhqRTx0-EZADEmMz2giGlyRbzRbw',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest?version=v1'],
        'clientId': '490787298478-l9t0v16t4es8h8hnset7h18nab6l1gju.apps.googleusercontent.com',
        'scope': 'profile'
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(_updateSigninStatus);
        _updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      })
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
    '$rootScope'
  ];

  angular
  .module('Core.glLogin', [])
  .service('Google', Google);
})();
