(function() {
  'use strict';

  function Utils($rootScope, ngProgressFactory) {

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

    // ====

    return {
      progressbar: {
        init: _progressBarInit(),
        start: _progressBarStart,
        complete: _progressBarComplete
      }
    }
  }

  Utils.$inject = [
    '$rootScope',
    'ngProgressFactory'
  ];

  angular
  .module('Core.service')
  .factory('Utils', Utils);
})();
