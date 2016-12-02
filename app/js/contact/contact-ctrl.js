(function() {
  'use strict';

  function ContactCtrl($routeParams, $location, CoreService, ngProgressFactory) {
    var vm;

    vm = this;
    vm.progressbar = ngProgressFactory.createInstance();

    // ====

    function getContact() {
      vm.progressbar.start();

      var id;

      id = $routeParams.id;

      CoreService.getContact(id).then(function(result) {
        vm.user = result;

        vm.progressbar.complete();
      });
    }

    function editContact() {
      vm.progressbar.start();

      var params;

      params = vm.user;

      CoreService.editContact(params).then(function(result) {
        $location.path('/contatos');

        vm.progressbar.complete();
      });
    }

    function removeContact() {
      vm.progressbar.start();

      var params;

      params = vm.user._id;

      CoreService.removeContact(params).then(function(result) {
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
    'CoreService',
    'ngProgressFactory'
  ];

  angular
  .module('Contact.ctrl', [])
  .controller('ContactCtrl', ContactCtrl);
})();
