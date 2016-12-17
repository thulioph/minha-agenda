(function() {
  'use strict';

  function ModuleConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider
      .state('splash', {
        url: '/',
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('cadastro', {
        url: '/cadastro',
        templateUrl: 'views/cadastro.html',
        controller: 'CadastroCtrl',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .state('horarios', {
        url: '/horarios',
        templateUrl: 'views/horarios.html',
        controller: 'HorariosCtrl',
        controllerAs: 'vm'
      })
      .state('barbearia', {
        url: '/barbearia',
        templateUrl: 'views/a-barbearia.html',
        controller: 'BarbeariaCtrl',
        controllerAs: 'vm'
      })
      .state('conta', {
        url: '/conta',
        templateUrl: 'views/conta.html',
        controller: 'ContaCtrl',
        controllerAs: 'vm'
      })
      .state('equipe', {
        url: '/equipe',
        templateUrl: 'views/a-equipe.html',
        controller: 'EquipeCtrl',
        controllerAs: 'vm'
      })
      .state('membro', {
        url: '/equipe/:id',
        templateUrl: 'views/membro.html',
        controller: 'MembroCtrl',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');

    $ionicConfigProvider.scrolling.jsScrolling(true);
  }

  angular
    .module('starter')
    .config(ModuleConfig);
})();
