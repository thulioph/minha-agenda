(function() {
  'use strict';

  function MembroCtrl($ionicHistory) {
    var vm;

    vm = this;

    vm.goBack = $ionicHistory.goBack;
  }

  MembroCtrl.$inject = [
    '$ionicHistory'
  ];

  angular
  .module('Barber.membro')
  .controller('MembroCtrl', MembroCtrl);
})();
