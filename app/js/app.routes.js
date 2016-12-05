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
      .when('/error/404', {
        templateUrl: 'views/404.html',
        controller: 'NotFoundCtrl',
        controllerAs: 'vm'
      })
      .when('/error/401', {
        templateUrl: 'views/401.html',
        controller: 'UnAuthorizedCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
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
