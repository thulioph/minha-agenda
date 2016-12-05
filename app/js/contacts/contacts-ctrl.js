(function() {
  'use strict';

  function ContactsCtrl(CoreService, $rootScope) {
    var vm;

    vm = this;
    vm.progressbar = CoreService.progressbar;

    // ====

    function getContacts() {
      vm.progressbar.start();

      CoreService.listContacts().then(function(data) {
        vm.contacts = data;

        vm.progressbar.complete();
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
