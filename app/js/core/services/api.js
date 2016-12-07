(function() {
  'use strict';

  function ApiService($log, $http, $q, ApiConfig, $route, $rootScope, ngProgressFactory) {

    // contatos
    // =====
    function _listContacts() {

      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/contact').then(success).catch(error);
    }

    function _getRoute() {
      return $route.current.originalPath;
    }

    function _addContact(obj) {

      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.post(ApiConfig.API_URL + '/contact/create', obj).then(success).catch(error);
    }

    function _getContact(id) {

     function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/contact/' + id).then(success).catch(error);
    }

    function _editContact(obj) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.put(ApiConfig.API_URL + '/contact/edit/' + obj._id, obj).then(success).catch(error);
    }

    function _removeContact(id) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.delete(ApiConfig.API_URL + '/contact/delete/' + id).then(success).catch(error);
    }


    // Users
    // =====
    function _addNewUser(obj) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.post(ApiConfig.API_URL + '/api/users/create', obj).then(success).catch(error);
    }

    function _listAllUsers(obj) {
      function success(response) {
        return response.data;
      }

      function error(err) {
        $log.error(err);
        return $q.reject(error.status);
      }

      return $http.get(ApiConfig.API_URL + '/api/users').then(success).catch(error);
    }


    // gerais
    // =====

    function _progressBarInit() {
      $rootScope.progressbar = ngProgressFactory.createInstance();
      $rootScope.progressbar.setColor('#9B4DCA');
      $rootScope.progressbar.setHeight('3px');
    }

    function _progressBarStart() {
      return $rootScope.progressbar.start();
    }

    function _progressBarComplete() {
      return $rootScope.progressbar.complete();
    }

    // =========

    return {
      listContacts: _listContacts,
      getRoute: _getRoute,
      addContact: _addContact,
      getContact: _getContact,
      editContact: _editContact,
      removeContact: _removeContact,
      progressbar: {
        init: _progressBarInit(), // já inicia criando uma instância
        start: _progressBarStart,
        complete: _progressBarComplete
      },
      contato: {
        register: _addNewUser,
        list: _listAllUsers
      }
    }
  }

  ApiService.$inject = [
    '$log',
    '$http',
    '$q',
    'ApiConfig',
    '$route',
    '$rootScope',
    'ngProgressFactory'
  ];

  angular
  .module('Core.service', [])
  .service('ApiService', ApiService);
})();
