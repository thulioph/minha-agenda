(function() {
  'use strict';

  function HomeCtrl(CoreService, $rootScope, Facebook) {
    var vm;

    vm = this;
    vm.form = {};
    vm.login = {
      facebook: loginFacebook
    };

    // ====

    function addContact() {
      var params;

      params = vm.form;

      CoreService.addContact(params).then(function(result) {
        vm.last_created = result;
      });

      vm.form = {};
    }

    function loginFacebook() {
      Facebook.login();
    }

    // ====

    vm.addContact = addContact;
    $rootScope.route = CoreService.getRoute();
  }

  HomeCtrl.$inject = [
    'CoreService',
    '$rootScope',
    'Facebook'
  ];

  angular
  .module('Home.ctrl', [])
  .controller('HomeCtrl', HomeCtrl);
})();
