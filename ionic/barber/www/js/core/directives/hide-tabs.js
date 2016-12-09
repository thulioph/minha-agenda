(function() {
  'use strict';

  function HideTabs($rootScope) {
    function _link($scope, $el) {
      console.log('To aqui!');

      $rootScope.hideTabs = 'tabs-item-hide';

      // $scope.$on('$destroy', function() {
      //     $rootScope.hideTabs = '';
      // });
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
