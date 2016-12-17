(function() {
  'use strict';

  function HideTabs($rootScope) {
    function _link($scope, $el) {
      $rootScope.hideTabs = 'tabs-item-hide';

      $scope.$on('$destroy', function() {
          delete $rootScope.hideTabs;
      });
    }

    return {
        restrict: 'A',
        link: _link
    };
  }

  HideTabs.$inject = [
    '$rootScope'
  ];

  angular
  .module('Core.directives', [])
  .directive('hideTabs', HideTabs);
})();
