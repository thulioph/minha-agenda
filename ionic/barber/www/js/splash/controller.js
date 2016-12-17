(function() {
  'use strict';

  function SplashCtrl($rootScope) {
    var vm;

    vm = this;

    $rootScope.splash = true;
  }

  SplashCtrl.$inject = [
    '$rootScope'
  ];

  angular
  .module('Barber.splash')
  .controller('SplashCtrl', SplashCtrl);
})();
