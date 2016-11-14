(function() {
  'use strict';

  function CoreService($log, $http, $q, ApiConfig) {
    function _listContacts() {

      function success(response) {
        return response.data;
      }

      function error(err) {
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/contacts/retrieve').then(success).catch(error);
    }

    return {
      listContacts: _listContacts
    }
  }

  CoreService.$inject = [
    '$log',
    '$http',
    '$q',
    'ApiConfig'
  ];

  angular
  .module('Core.service', [])
  .service('CoreService', CoreService);
})();
