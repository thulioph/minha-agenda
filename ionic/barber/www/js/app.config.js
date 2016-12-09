(function() {
  'use strict';

  function ModuleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
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

      $urlRouterProvider.otherwise('/home');
  }

  angular
    .module('starter')
    .config(ModuleConfig);
})();
