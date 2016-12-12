(function() {
  'use strict';

  function HomeCtrl(ApiService) {
    var vm;

    vm = this;

    // angular.element(document).ready(function() {
    //   getAllClients();
    // });

    // ====

    vm.lastServices = [];

    // function getAllClients() {
    //   ApiService.getAllClients().then(function(result) {
    //     vm.allClients = result;
    //   });
    // }


    // ====
  }

  HomeCtrl.$inject = [
    'ApiService'
  ];

  angular
  .module('Barber.home')
  .controller('HomeCtrl', HomeCtrl);
})();
