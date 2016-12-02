(function() {
  'use strict';

  angular.module('Core',
    [
      'Core.config',
      'Core.constant',
      'Core.service',
      'Core.fbLogin',
      'Core.glLogin'
    ]
  );

})();
