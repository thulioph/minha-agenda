(function() {
  'use strict';

  function ApiService($log, $http, $q, ApiConfig, $rootScope) {

    // Clients
    // =====
    function _listAllClients() {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL_PROD + '/api/users').then(success).catch(error);
    }

    // =========

    return {
      getAllClients: _listAllClients
    }
  }

  ApiService.$inject = [
    '$log',
    '$http',
    '$q',
    'ApiConfig',
    '$rootScope'
  ];

  angular
  .module('Core.service', [])
  .service('ApiService', ApiService);
})();
