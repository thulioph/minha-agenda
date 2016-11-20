(function() {
  'use strict';

  function ContactCtrl($routeParams, $location, CoreService) {
    var vm;

    vm = this;

    // ====

    function getContact() {
      var id;

      id = $routeParams.id;

      CoreService.getContact(id).then(function(result) {
        vm.user = result;
      });
    }

    function editContact() {
      var params;

      params = vm.user;

      CoreService.editContact(params).then(function(result) {
        $location.path('/contatos');
      });
    }

    function removeContact() {
      var params;

      params = vm.user._id;

      CoreService.removeContact(params).then(function(result) {
        $location.path('/contatos');
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
    'CoreService'
  ];

  angular
  .module('Contact.ctrl', [])
  .controller('ContactCtrl', ContactCtrl);
})();
