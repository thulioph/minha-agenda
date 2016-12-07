(function() {
 'use strict';

function AppConfig($httpProvider) {
  $httpProvider.interceptors.push('NotFoundInterceptor');
  $httpProvider.interceptors.push('AuthInterceptor');
}

AppConfig.$inject = [
  '$httpProvider'
];

 angular
 .module('Core.config', [])
 .config(AppConfig);
})()
