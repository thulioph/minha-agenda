(function() {
  'use strict';

  function Facebook($rootScope, ApiConfig, $cordovaOauth, $http) {
    function _loginWeb() {
      FB.init({
        appId: ApiConfig.FACEBOOK.APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

       _checkLoginState();
    }

    function _signup() {
      var fields;

      fields = ['public_profile', 'email'];

      $cordovaOauth.facebook(ApiConfig.FACEBOOK.APP_ID, fields).then(function(result) {
        $http.get("https://graph.facebook.com/v2.2/me", {
            params: {
              access_token: result.access_token,
              fields: "name, picture, link, gender, location, email",
              format: "json"
            }
          }).then(function(result) {
          $rootScope.$broadcast('signup_ok', {
            user_info: result
          });
        }, function(error) {
          alert("Error: " + error);
        });

      }, function(err) {
        console.error(err);
      })
    }

    function _login() {
      var fields;

      fields = ['public_profile', 'email'];

      $cordovaOauth.facebook(ApiConfig.FACEBOOK.APP_ID, fields).then(function(result) {
        $http.get("https://graph.facebook.com/v2.2/me", {
            params: {
              access_token: result.access_token,
              fields: "name, picture, link, gender, location, email",
              format: "json"
            }
          }).then(function(result) {
          $rootScope.$broadcast('fb_ok', {
            user_info: result
          });
        }, function(error) {
          alert("Error: " + error);
        });

      }, function(err) {
        console.error(err);
      })
    }

    function _statusChangeCallback(response) {
      if (response.status === 'connected') {
        // obtém os dados caso o usuário já tenha permitido
        _getUserData();
      } else if (response.status === 'not_authorized') {
        // vai abrir a janela do facebook pra login
        _handleLogin();
      } else {
        // vai abrir a janela do facebook pra login
        // o usuário não está logado
        _handleLogin();
      }
    }

    function _checkLoginState() {
      FB.getLoginStatus(function(response) {
        _statusChangeCallback(response);
      });
    }

    function _getUserData() {
      // fields são os campos que eu desejo pegar do usuário
      var fields;

      fields = 'name, picture, link, gender, locale, email, cover, timezone, updated_time';

      FB.api('/me', { fields: fields }, function(response) {
        $rootScope.$broadcast('fb_ok', {
          user_info: response
        });
      });
    }

    function _handleLogin() {
      FB.login(function(response) {
        if (response.status === 'connected') {
          // efetuando login
          _statusChangeCallback(response);
        } else if (response.status === 'not_authorized') {
          // não autorizado
          console.error('NÃO AUTORIZADO!');
        } else {
          // não está logado
          console.error('NÃO ESTÁ LOGADO!');
        }
      }, { scope: 'public_profile, email' });
      // scope são quais permissões o usuário está aceitando fornecer
    }

    // ======

    return {
      login: _login,
      signup: _signup
    }
  }

Facebook.$inject = [
    '$rootScope',
    'ApiConfig',
    '$cordovaOauth',
    '$http'
  ];

  angular
  .module('Core.service')
  .service('Facebook', Facebook);
})();
