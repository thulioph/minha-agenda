//
// Responsável pelas autenticações com o backend
//

(function() {
  'use strict';

  function Auth($rootScope, $q, $log, ApiService) {

    function _success(data) {
      return $rootScope.$emit('auth_ok', data);
    }

    function _error(err) {
      $log.error(err);
      return $q.reject(err.status);
    }

    // ====

    function facebook(obj) {
      obj.social = 'facebook';
      ApiService.contato.register(obj).then(_success).catch(_error);
    }

    function google(obj) {
      obj.social = 'google';
      ApiService.contato.register(obj).then(_success).catch(_error);
    }

    // ======

    return {
      Facebook: facebook,
      Google: google
    }
  }

  Auth.$inject = [
    '$rootScope',
    '$q',
    '$log',
    'ApiService'
  ];

  angular
  .module('Core.auth', [])
  .service('Auth', Auth);
})();
