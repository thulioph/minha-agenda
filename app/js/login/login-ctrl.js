(function() {
  'use strict';

  function LoginCtrl($rootScope, $scope, Facebook, Google) {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      Facebook.login();
    }

    function loginGoogle() {
      Google.login();
    }

    function oAuthUserFB(evt, obj) {
      $scope.$apply(function () {
          vm.fb_user_info = obj.user_info;
      });
    }

    function oAuthUserGL(evt, obj) {
      $scope.$apply(function () {
          vm.gl_user_info = obj.user_info;
      });
    }

    // ====

    $rootScope.$on('fb_ok', oAuthUserFB);
    $rootScope.$on('gl_ok', oAuthUserGL);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$scope',
    'Facebook',
    'Google'
  ];

  angular
  .module('Login.ctrl', [])
  .controller('LoginCtrl', LoginCtrl);
})();
