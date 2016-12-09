(function() {
  'use strict';

  function ModuleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('cadastro', {
        url: '/cadastro',
        templateUrl: '/views/cadastro.html',
        controller: 'CadastroCtrl',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .state('horarios', {
        url: '/horarios',
        templateUrl: '/views/horarios.html',
        controller: 'HorariosCtrl',
        controllerAs: 'vm'
      })
      .state('barbearia', {
        url: '/barbearia',
        templateUrl: '/views/a-barbearia.html',
        controller: 'BarbeariaCtrl',
        controllerAs: 'vm'
      })
      .state('equipe', {
        url: '/equipe',
        templateUrl: '/views/a-equipe.html',
        controller: 'EquipeCtrl',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/login');
  }

  angular
    .module('starter')
    .config(ModuleConfig);
})();
