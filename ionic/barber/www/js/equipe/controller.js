(function() {
  'use strict';

  function EquipeCtrl($scope, $rootScope, $filter, Utils) {
    var vm;

    vm = this;

    // ====

    vm.getTeam = getTeam();

    // ====

    function getTeam() {
      Utils.progressbar.start();

      Utils.team().then(function(result) {
        vm.team = result;

        Utils.progressbar.complete();
      });
    }

    function getTeamMember(arr, criteria) {
      return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
          return obj[c] == criteria[c];
        });
      });
    }

    // ====

    $scope.$on('$stateChangeStart', function(evt, next, current) {
      $rootScope.teamMember = getTeamMember(vm.team, { id: current.id })[0];
    });
  }

  EquipeCtrl.$inject = [
    '$scope',
    '$rootScope',
    '$filter',
    'Utils',
  ];

  angular
  .module('Barber.equipe')
  .controller('EquipeCtrl', EquipeCtrl);
})();
