(function() {
  'use strict';

  function HomeCtrl(ApiService, Utils) {
    var vm;

    vm = this;

    angular.element(document).ready(function() {
      getAllClients();
    });

    // ====

    vm.lastServices = [];

    function getAllClients() {
      Utils.progressbar.start();

      ApiService.getAllClients().then(function(result) {
        vm.allClients = result;

        Utils.progressbar.complete();
      });
    }

    // ====
  }

  HomeCtrl.$inject = [
    'ApiService',
    'Utils'
  ];

  angular
  .module('Barber.home')
  .controller('HomeCtrl', HomeCtrl);
})();
