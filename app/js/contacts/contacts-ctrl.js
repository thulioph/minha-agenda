(function() {
  'use strict';

  function ContactsCtrl(CoreService) {
    var vm;

    vm = this;
    vm.active = 'contacts';

    // ====

    function getContacts() {
      CoreService.listContacts().then(function(data) {
        vm.contacts = data;
      });
    }

    // ====

    vm.getContacts = getContacts();
  }

  ContactsCtrl.$inject = [
    'CoreService'
  ];

  angular
  .module('Contacts.ctrl', [])
  .controller('ContactsCtrl', ContactsCtrl);
})();
