(function() {
  'use strict';

  function ConfigApp($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .when('/contatos', {
        templateUrl: 'views/contatos.html',
        controller: 'ContactsCtrl',
        controllerAs: 'vm'
      });
  }

  ConfigApp.$inject = [
    '$routeProvider'
  ];

  angular
  .module('App')
  .config(ConfigApp);

})();
