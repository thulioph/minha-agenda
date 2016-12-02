(function() {
  'use strict';

  function HomeCtrl(CoreService, $rootScope, ngProgressFactory) {
    var vm;

    vm = this;
    vm.progressbar = ngProgressFactory.createInstance();
    vm.form = {};

    // ====

    function addContact() {
      vm.progressbar.start();

      var params;

      params = vm.form;

      CoreService.addContact(params).then(function(result) {
        vm.last_created = result;

        vm.progressbar.complete();
      });

      vm.form = {};
    }

    // ====

    vm.addContact = addContact;
    $rootScope.route = CoreService.getRoute();
  }

  HomeCtrl.$inject = [
    'CoreService',
    '$rootScope',
    'ngProgressFactory'
  ];

  angular
  .module('Home.ctrl', [])
  .controller('HomeCtrl', HomeCtrl);
})();
