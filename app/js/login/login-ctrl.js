(function() {
  'use strict';

  function LoginCtrl($rootScope, $scope, Facebook, Google, ngProgressFactory) {
    var vm;

    vm = this;
    vm.progressbar = ngProgressFactory.createInstance();

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      vm.progressbar.start();

      Facebook.login();
    }

    function loginGoogle() {
      vm.progressbar.start();

      Google.login();
    }

    function oAuthUserFB(evt, obj) {
      $scope.$apply(function () {
          vm.fb_user_info = obj.user_info;
      });

      vm.progressbar.complete();
    }

    function oAuthUserGL(evt, obj) {
      $scope.$apply(function () {
          vm.gl_user_info = obj.user_info;
      });

      vm.progressbar.complete();
    }

    // ====

    $rootScope.$on('fb_ok', oAuthUserFB);
    $rootScope.$on('gl_ok', oAuthUserGL);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$scope',
    'Facebook',
    'Google',
    'ngProgressFactory'
  ];

  angular
  .module('Login.ctrl', [])
  .controller('LoginCtrl', LoginCtrl);
})();
