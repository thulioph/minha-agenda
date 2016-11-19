(function() {
  'use strict';

  function CoreService($log, $http, $q, ApiConfig, $route) {
    function _listContacts() {

      function success(response) {
        console.warn(response);
        return response.data;
      }

      function error(err) {
        console.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/contact').then(success).catch(error);
    }

    // ==========

    function _getRoute() {
      return $route.current.originalPath;
    }

    // ==========

    function _addContact(obj) {

      function success(response) {
        console.log('SUCCESS -> ', response);
        return response.data;
      }

      function error(err) {
        console.error('ERROR -> ', err);
        return $q.reject(error.status);
      }

      return $http.post(ApiConfig.API_URL + '/contact/create', obj).then(success).catch(error);
    }

    return {
      listContacts: _listContacts,
      getRoute: _getRoute,
      addContact: _addContact
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
