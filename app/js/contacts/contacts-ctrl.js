(function() {
  'use strict';

  function ContactsCtrl(CoreService, $rootScope, ngProgressFactory) {
    var vm;

    vm = this;
    vm.progressbar = ngProgressFactory.createInstance();

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
    '$rootScope',
    'ngProgressFactory'
  ];

  angular
  .module('Contacts.ctrl', [])
  .controller('ContactsCtrl', ContactsCtrl);
})();
