(function() {
  'use strict';

  function CadastroCtrl() {
    var vm;

    vm = this;

    // ====

    vm.cadastro = cadasto;

    // ====

    function cadasto(value) {
      switch(value) {
        case 'facebook':
          _loginWithFacebook();
        break;

        case 'google':
          _loginWithGoogle();
        break;
      }
    }

    function _loginWithFacebook() {
      console.warn('Cadastro com Facebook');
    }

    function _loginWithGoogle() {
      console.warn('Cadastro com Google');
    }
  }

  angular
  .module('Barber.cadastro')
  .controller('CadastroCtrl', CadastroCtrl);
})();
