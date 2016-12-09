(function() {
  'use strict';

  function HomeCtrl(ApiService) {
    var vm;

    vm = this;

    angular.element(document).ready(function() {
      getAllClients();
    });

    // ====

    vm.listClients = [];

    function getAllClients() {
      ApiService.getAllClients().then(function(result) {
        console.warn(result);
      })
    }

    // ====
  }

  HomeCtrl.$inject = [
    'ApiService'
  ];

  angular
  .module('Barber.home')
  .controller('HomeCtrl', HomeCtrl);
})();
