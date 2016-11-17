(function() {
  'use strict';

  function ContactsCtrl(CoreService, $rootScope) {
    var vm;

    vm = this;

    // ====

    function getContacts() {
      CoreService.listContacts().then(function(data) {
        vm.contacts = data;
      });
    }

    // ====

    vm.getContacts = getContacts();
    $rootScope.route = CoreService.getRoute();
  }

  ContactsCtrl.$inject = [
    'CoreService',
    '$rootScope'
  ];

  angular
  .module('Contacts.ctrl', [])
  .controller('ContactsCtrl', ContactsCtrl);
})();
