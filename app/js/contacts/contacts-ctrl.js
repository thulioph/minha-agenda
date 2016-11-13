(function() {
  'use strict';

  function ContactsCtrl() {
    var vm;

    vm = this;

    // ====

    function getContacts() {
      console.warn('DALE DALE!');
    }

    // ====

    vm.getContacts = getContacts;
  }

  angular
  .module('Contacts.ctrl', [])
  .controller('ContactsCtrl', ContactsCtrl);
})();
