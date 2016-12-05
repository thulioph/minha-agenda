(function() {
  'use strict';

  function Facebook($rootScope, ApiConfig) {
    //
    // 1. é necessário obter a permissão do usuário pra se obter
    // o nome e o id
    //

    function _login() {
      FB.init({
        appId: ApiConfig.FACEBOOK.APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

       _checkLoginState();
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
      login: _login
    }
  }

  Facebook.$inject = [
    '$rootScope',
    'ApiConfig'
  ];

  angular
  .module('Core.fbLogin', [])
  .service('Facebook', Facebook);
})();
