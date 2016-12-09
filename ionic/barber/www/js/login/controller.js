(function() {
  'use strict';

  function LoginCtrl() {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      console.warn('Facebook');
    }

    function loginGoogle() {
      console.warn('Google');
    }

    // ====

  }

  angular
  .module('Barber.login')
  .controller('LoginCtrl', LoginCtrl);
})();
