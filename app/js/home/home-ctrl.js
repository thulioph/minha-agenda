(function() {
  'use strict';

  function HomeCtrl(CoreService, $rootScope) {
    var vm;

    vm = this;
    vm.form = {};

    // ====

    function addContact() {
      var params;

      params = vm.form;

      CoreService.addContact(params).then(function(result) {
        vm.last_created = result;
      });

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
