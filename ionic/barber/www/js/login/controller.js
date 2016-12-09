(function() {
  'use strict';

  function LoginCtrl($rootScope, $state, Facebook, Utils, ApiService) {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      Utils.progressbar.start();

      Facebook.login();
    }

    function SignupFacebook(evt, obj) {
      var user_id;

      user_id = obj.user_info.id;

      ApiService.signin(user_id).then(function(result) {
        $rootScope.user = result;
        $state.go('home');

        Utils.progressbar.complete();
      });
    }

    function loginGoogle() {
      console.warn('Google');
    }

    // ====

    $rootScope.$on('fb_ok', SignupFacebook);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$state',
    'Facebook',
    'Utils',
    'ApiService'
  ];

  angular
  .module('Barber.login')
  .controller('LoginCtrl', LoginCtrl);
})();
