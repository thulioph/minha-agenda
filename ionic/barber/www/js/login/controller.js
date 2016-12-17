(function() {
  'use strict';

  function LoginCtrl($rootScope, $state, Facebook, Google, Utils, ApiService) {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle,
      signIn: signIn
    };

    // ====

    function loginFacebook() {
      Utils.progressbar.start();

      Facebook.login();
    }

    function SignupFacebook(evt, obj) {
      var user_id;

      if (obj.user_info.data) {
        user_id = obj.user_info.data.id; // via app
      } else {
        user_id = obj.user_info.id; // via web
      }

      vm.login.signIn(user_id);
    }

    function SignupGoogle(evt, obj) {
      var user_id;

      user_id = obj.user_info.metadata.sources[0].id;

      vm.login.signIn(user_id);
    }

    function signIn(id) {
      ApiService.signin(id).then(function(result) {
        if (result !== null) {
          $rootScope.user = result;
          $state.go('home');
        } else {
          vm.error = {
            message: 'Não existe usuário para esta conta.'
          };
        }

        Utils.progressbar.complete();
      });
    }

    function loginGoogle() {
      Utils.progressbar.start();

      Google.login();
    }

    // ====

    $rootScope.$on('fb_ok', SignupFacebook);
    $rootScope.$on('gl_ok', SignupGoogle);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$state',
    'Facebook',
    'Google',
    'Utils',
    'ApiService'
  ];

  angular
  .module('Barber.login')
  .controller('LoginCtrl', LoginCtrl);
})();
