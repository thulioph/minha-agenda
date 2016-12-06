(function() {
  'use strict';

  function ContactsCtrl(ApiService, $rootScope) {
    var vm;

    vm = this;
    vm.progressbar = ApiService.progressbar;

    // ====

    function getContacts() {
      vm.progressbar.start();

      ApiService.listContacts().then(function(data) {
        vm.contacts = data;

        vm.progressbar.complete();
      });
    }

    // ====

    vm.getContacts = getContacts();
    $rootScope.route = ApiService.getRoute();
  }

  ContactsCtrl.$inject = [
    'ApiService',
    '$rootScope'
  ];

  angular
  .module('Contacts.ctrl', [])
  .controller('ContactsCtrl', ContactsCtrl);
})();
