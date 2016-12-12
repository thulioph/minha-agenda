(function() {
  'use strict';

  function HomeCtrl(ApiService, $ionicActionSheet) {
    var vm;

    vm = this;

    angular.element(document).ready(function() {
      getAllClients();
    });

    // ====

    vm.allClients = [];
    vm.quickAccess = quickAccess;

    function getAllClients() {
      ApiService.getAllClients().then(function(result) {
        vm.allClients = result;
      });
    }

    function _cancel() {
      console.log('Cancelou!');
    }

    function _buttonClicked(index) {
      console.log('Clicou: ', index);
    }

    function quickAccess() {
      var options;

      options = new Object();

      options = {
        buttons: [
          {
            text: 'Sim'
          },
          {
            text: 'Não'
          }
        ],
        titleText: 'Deseja sair da Barbearia?',
        cancelText: 'Cancelar',
        cancel: _cancel,
        buttonClicked: _buttonClicked
      };

      $ionicActionSheet.show(options);
    }

    // ====
  }

  HomeCtrl.$inject = [
    'ApiService',
    '$ionicActionSheet'
  ];

  angular
  .module('Barber.home')
  .controller('HomeCtrl', HomeCtrl);
})();
