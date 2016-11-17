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
      })
      .when('/contato/:id', {
        templateUrl: 'views/contato.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  ConfigApp.$inject = [
    '$routeProvider'
  ];

  angular
  .module('App')
  .config(ConfigApp);

})();
