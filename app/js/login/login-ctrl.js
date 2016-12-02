(function() {
  'use strict';

  function LoginCtrl($rootScope, $scope, Facebook) {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook
    };

    // ====

    function loginFacebook() {
      Facebook.login();
    }

    function oAuthUser(evt, obj) {
      $scope.$apply(function () {
          vm.user_info = obj.user_info;
      });
    }

    $rootScope.$on('fb_ok', oAuthUser);

  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$scope',
    'Facebook'
  ];

  angular
  .module('Login.ctrl', [])
  .controller('LoginCtrl', LoginCtrl);
})();
