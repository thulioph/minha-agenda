(function() {
  'use strict';

  function ContactCtrl($routeParams) {
    var vm;

    vm = this;

    // ====

    function getUser() {
      vm.user = $routeParams;
    }

    // ====

    vm.getUser = getUser();
  }

  ContactCtrl.$inject = [
    '$routeParams'
  ];

  angular
  .module('Contact.ctrl', [])
  .controller('ContactCtrl', ContactCtrl);
})();
