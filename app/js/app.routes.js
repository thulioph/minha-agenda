(function() {
  'use strict';

  function ConfigApp($routeProvider) {
    $routeProvider
      .when('/home', {
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
      .when('/cadastro', {
        templateUrl: 'views/cadastro.html',
        controller: 'CadastroCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

  ConfigApp.$inject = [
    '$routeProvider'
  ];

  angular
  .module('App')
  .config(ConfigApp);
})();
