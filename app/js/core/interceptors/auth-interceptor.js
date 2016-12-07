(function() {
  'use strict';

  function AuthInterceptor($q, $location) {

    // ação executada numa resposta do servidor
    function _responseError(rejection) {
      if (rejection.status === 401 || rejection.status === 403) {
        // não autorizado ou forbidden
        $location.path('/error/401');
      }

      return $q.reject(rejection);
    }

   // ação executada numa requisição ao servidor
    function _request(config) {
      config.headers = config.headers || {};

      if (localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      }

      return config;
    }

    return {
      request: _request,
      responseError: _responseError
    };
  }

  AuthInterceptor.$inject = [
    '$q',
    '$location'
  ];

  angular
  .module('Core.config')
  .factory('AuthInterceptor', AuthInterceptor);
})();
