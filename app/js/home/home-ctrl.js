(function() {
  'use strict';

  function HomeCtrl(CoreService, $rootScope) {
    var vm;

    vm = this;
    vm.form = {};

    // ====

    function addContact() {
      console.warn(vm.form);

      vm.form = {};
    }

    // ====

    vm.addContact = addContact;
    $rootScope.route = CoreService.getRoute();
  }

  HomeCtrl.$inject = [
    'CoreService',
    '$rootScope'
  ];

  angular
  .module('Home.ctrl', [])
  .controller('HomeCtrl', HomeCtrl);
})();
