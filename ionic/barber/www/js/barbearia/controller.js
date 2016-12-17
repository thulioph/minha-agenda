(function() {
  'use strict';

  function BarbeariaCtrl() {
    var vm;

    vm = this;

    // ====

    angular.element(document).ready(function() {
      initMap();
    });

    // ====

    function initMap() {
      var map, lat_lng, marker;

      lat_lng = new google.maps.LatLng(-8.1901287,-34.9237563);

      map = new google.maps.Map(document.getElementById('map-container'), {
        center: lat_lng,
        zoom: 12,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: false,
        draggable: true
      });

      marker = new google.maps.Marker({
        position: lat_lng,
        map: map
      });
    }
  }

  BarbeariaCtrl.$inject = [];

  angular
  .module('Barber.barbearia')
  .controller('BarbeariaCtrl', BarbeariaCtrl);
})();
