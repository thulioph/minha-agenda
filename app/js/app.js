(function() {
  'use strict';

  function runApp($rootScope, $window) {
    $rootScope.online = navigator.onLine;

    $window.addEventListener('offline', function() {
      $rootScope.$apply(function() {
        $rootScope.online = false;
      });
    }, false);

    $window.addEventListener('online', function() {
      $rootScope.$apply(function() {
        $rootScope.online = true;
      });
    }, false);
  }

  angular
  .module('App',
    [
      'Core',
      'Error',
      'Login',
      'Cadastro',
      'Home',
      'Contacts',
      'Contact',
      'ngRoute',
      'ngProgress'
    ]
  ).run(runApp);
})();
