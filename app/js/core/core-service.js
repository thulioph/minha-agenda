(function() {
  'use strict';

  function CoreService($log, $http, $q, ApiConfig, $route) {
    function _listContacts() {

      function success(response) {
        return response.data;
      }

      function error(err) {
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/contacts/retrieve').then(success).catch(error);
    }

    function _getRoute() {
      return $route.current.originalPath;
    }

    return {
      listContacts: _listContacts,
      getRoute: _getRoute
    }
  }

  CoreService.$inject = [
    '$log',
    '$http',
    '$q',
    'ApiConfig',
    '$route'
  ];

  angular
  .module('Core.service', [])
  .service('CoreService', CoreService);
})();
