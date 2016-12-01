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
        console.warn('CONECTADO!');
        _getUserData();
      } else if (response.status === 'not_authorized') {
        console.warn('NÃO AUTORIZADO!');
        _handleLogin();
      } else {
        console.warn('NÃO ESTÁ LOGADO!');
      }
    }

    function _checkLoginState() {
      FB.getLoginStatus(function(response) {
        _statusChangeCallback(response);
      });
    }

    function _getUserData() {
      FB.api('/me', function(response) {
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
      }, { scope: 'public_profile,email' });
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
