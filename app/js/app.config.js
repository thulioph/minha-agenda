(function() {
 'use strict';

function AppConfig($httpProvider, $opbeatProvider) {
  $httpProvider.interceptors.push('NotFoundInterceptor');
  $httpProvider.interceptors.push('AuthInterceptor');

  $opbeatProvider.config({
    orgId: '4b348a81e1c34a42b5913e67d300cd43',
    appId: '18fed1c5b7'
  });
}

AppConfig.$inject = [
  '$httpProvider',
  'ngOpbeat'
];

 angular
 .module('Core.config', [])
 .config(AppConfig);
})()
