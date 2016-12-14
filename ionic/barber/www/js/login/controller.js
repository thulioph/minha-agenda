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

      user_id = obj.user_info.data.id;

      vm.login.signIn(user_id);
    }

    function SignupGoogle(evt, obj) {
      var user_id;

      user_id = obj.user_info.metadata.sources[0].id;

      vm.login.signIn(user_id);
    }

    function signIn(id) {
      ApiService.signin(id).then(function(result) {
        $rootScope.user = result;
        $state.go('home');

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
