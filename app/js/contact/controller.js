(function() {
  'use strict';

  function ContactCtrl($routeParams, $location, ApiService) {
    var vm;

    vm = this;
    vm.progressbar = ApiService.progressbar;

    // ====

    function getContact() {
      vm.progressbar.start();

      var id;

      id = $routeParams.id;

      ApiService.getContact(id).then(function(result) {
        vm.user = result;

        vm.progressbar.complete();
      });
    }

    function editContact() {
      vm.progressbar.start();

      var params;

      params = vm.user;

      ApiService.editContact(params).then(function(result) {
        $location.path('/contatos');

        vm.progressbar.complete();
      });
    }

    function removeContact() {
      vm.progressbar.start();

      var params;

      params = vm.user._id;

      ApiService.removeContact(params).then(function(result) {
        $location.path('/contatos');

        vm.progressbar.complete();
      });
    }

    // ====

    vm.getContact = getContact();
    vm.editContact = editContact;
    vm.removeContact = removeContact;
  }

  ContactCtrl.$inject = [
    '$routeParams',
    '$location',
    'ApiService'
  ];

  angular
  .module('Contact.ctrl', [])
  .controller('ContactCtrl', ContactCtrl);
})();
