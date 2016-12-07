(function() {
  'use strict';

  function HomeCtrl(ApiService, $rootScope) {
    var vm;

    vm = this;
    vm.progressbar = ApiService.progressbar;
    vm.form = {};

    // ====

    function addContact() {
      vm.progressbar.start();

      var params;

      params = vm.form;

      ApiService.addContact(params).then(function(result) {
        vm.last_created = result;

        vm.progressbar.complete();
      });

      vm.form = {};
    }

    // ====

    vm.addContact = addContact;
    $rootScope.route = ApiService.getRoute();
  }

  HomeCtrl.$inject = [
    'ApiService',
    '$rootScope'
  ];

  angular
  .module('Home.ctrl', [])
  .controller('HomeCtrl', HomeCtrl);
})();
