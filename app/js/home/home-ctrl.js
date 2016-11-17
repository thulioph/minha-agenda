(function() {
  'use strict';

  function HomeCtrl() {
    var vm;

    vm = this;
    vm.form = {};

    // ====

    function addContact() {
      console.warn(vm.form);

      vm.form = {};
    }

    // ====

    vm.addContact = addContact;
  }

  angular
  .module('Home.ctrl', [])
  .controller('HomeCtrl', HomeCtrl);
})();
