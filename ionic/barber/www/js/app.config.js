(function() {
  'use strict';

  function ModuleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
      })
      .state('cadastro', {
        url: '/cadastro',
        templateUrl: '/views/cadastro.html',
        controller: 'CadastroCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      })
      .state('horarios', {
        url: '/horarios',
        templateUrl: '/views/horarios.html',
        controller: 'HorariosCtrl'
      })
      .state('barbearia', {
        url: '/barbearia',
        templateUrl: '/views/a-barbearia.html',
        controller: 'BarbeariaCtrl'
      })
      .state('equipe', {
        url: '/equipe',
        templateUrl: '/views/a-equipe.html',
        controller: 'EquipeCtrl'
      });

      $urlRouterProvider.otherwise('/login');
  }

  angular
    .module('starter')
    .config(ModuleConfig);
})();
