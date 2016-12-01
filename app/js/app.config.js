(function() {
 'use strict';

function AppConfig($httpProvider) {
  $httpProvider.interceptors.push('NotFoundInterceptor');
}

AppConfig.$inject = [
  '$httpProvider'
];

 angular
 .module('Core.config', [])
 .config(AppConfig);
})()
