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

    // Cadastro
    // =====
    function _addNewUser(obj) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.post(ApiConfig.API_URL_PROD + '/api/users/create', obj).then(success).catch(error);
    }

    // Login
    // =====
    function _getUser(id) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL_PROD + '/api/users/' + id).then(success).catch(error);
    }

    // =========

    return {
      getAllClients: _listAllClients,
      signup: _addNewUser,
      signin: _getUser
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
