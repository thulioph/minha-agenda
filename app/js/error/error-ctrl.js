(function() {
  'use strict';

  function NotFoundCtrl() {
    var vm;

    vm = this;

    vm.error = {
      msg: 'Página não encontrada.',
      code: '404'
    };
  }

  angular
  .module('Error.notfound', [])
  .controller('NotFoundCtrl', NotFoundCtrl);
})();
