(function() {
  'use strict';

  function HomeCtrl() {
    console.log('HomeCtrl');
  }

  angular
  .module('Barber.home')
  .controller('HomeCtrl', HomeCtrl);
})();
