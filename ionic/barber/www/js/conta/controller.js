(function() {
  'use strict';

  function ContaCtrl($ionicActionSheet, $state, Utils) {
    var vm;

    vm = this;

    // ====

    vm.quickAccess = quickAccess;

    // ====

    function _cancel() {
      console.log('Cancelou!');
    }

    function _buttonClicked(index) {
      Utils.logout();
      $state.go('splash');
    }

    function quickAccess() {
      var options;

      options = new Object();

      options = {
        buttons: [
          {
            text: 'Sim'
          }
        ],
        titleText: 'Deseja sair da Barbearia?',
        cancelText: 'Cancelar',
        cancel: _cancel,
        buttonClicked: _buttonClicked
      };

      $ionicActionSheet.show(options);
    }
  }

  ContaCtrl.$inject = [
    '$ionicActionSheet',
    '$state',
    'Utils'
  ];

  angular
    .module('Barber.conta', [])
    .controller('ContaCtrl', ContaCtrl);
})();
