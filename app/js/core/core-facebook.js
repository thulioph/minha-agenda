(function() {
  'use strict';

  function Facebook() {
    //
    // 1. é necessário obter a permissão do usuário pra se obter
    // o nome e o id
    //

    function _login() {
      console.info('Init');

      FB.init({
        appId: '1403969292947889',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

       _checkLoginState();
    }

    function _statusChangeCallback(response) {
      if (response.status === 'connected') {
        _getUserData(); // obtém os dados caso o usuário já tenha permitido
      } else if (response.status === 'not_authorized') {
        _handleLogin(); // vai abrir a janela do facebook pra login
      } else {
        console.error('NÃO ESTÁ LOGADO!');
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

      fields = 'picture, link, gender, locale, email, cover, timezone, updated_time';

      FB.api('/me', { fields: fields }, function(response) {
        console.log('A informação do usuário é: ', response);
      });
    }

    function _handleLogin() {
      FB.login(function(response) {
        if (response.status === 'connected') {
          console.warn('EFETUANDO LOGIN!');
          _statusChangeCallback(response);
        } else if (response.status === 'not_authorized') {
          console.error('NÃO AUTORIZADO!');
        } else {
          console.error('NÃO ESTÁ LOGADO!');
        }
      }, { scope: 'public_profile, email' });
      // scope: quais permissões o usuário está aceitando fornecer
    }

    // ======

    return {
      login: _login
    }
  }

  angular
  .module('Core.fbLogin', [])
  .service('Facebook', Facebook);
})();
