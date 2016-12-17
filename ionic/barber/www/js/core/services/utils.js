(function() {
  'use strict';

  function Utils($http, $q, $rootScope, ngProgressFactory) {

    //
    // Progressbar
    //

    function _progressBarInit() {
      $rootScope.progressbar = ngProgressFactory.createInstance();
      $rootScope.progressbar.setColor('#FFD454');
      $rootScope.progressbar.setHeight('3px');
    }

    function _progressBarStart() {
      return $rootScope.progressbar.start();
    }

    function _progressBarComplete() {
      return $rootScope.progressbar.complete();
    }


    //
    // Team
    //

    function _getTeam() {
      var url = 'https://gist.githubusercontent.com/thulioph/d440db6737563c6616faf7b4a35e2942/raw/e8f8bd2fb9d1aab3c32e8acc304bf55c664afbcf/barbers.json';

      function success(response) {
        return response.data;
      }

      function error(err) {
        return $q.reject(error.status);
      }

      return $http.get(url).then(success).catch(error);
    }


    //
    // Logout
    //

    function _logoutUser() {
      delete $rootScope.user;
    }

    // ====

    return {
      progressbar: {
        init: _progressBarInit(),
        start: _progressBarStart,
        complete: _progressBarComplete
      },
      team: _getTeam,
      logout: _logoutUser
    }
  }

  Utils.$inject = [
    '$http',
    '$q',
    '$rootScope',
    'ngProgressFactory'
  ];

  angular
  .module('Core.service')
  .factory('Utils', Utils);
})();
