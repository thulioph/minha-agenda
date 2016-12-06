(function() {
  'use strict';

  function UnAuthorizedCtrl() {
    var vm;

    vm = this;

    vm.error = {
      msg: 'Não autorizado.',
      code: '401'
    };
  }

  angular
  .module('Error.unauthorized', [])
  .controller('UnAuthorizedCtrl', UnAuthorizedCtrl);
})();
