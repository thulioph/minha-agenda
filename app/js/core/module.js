(function() {
  'use strict';

  angular.module('Core',
    [
      'Core.config',
      'Core.constant',
      'Core.auth',
      'Core.service',
      'Core.fbLogin',
      'Core.glLogin'
    ]
  );

})();
