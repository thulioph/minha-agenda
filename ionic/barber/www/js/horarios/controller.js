(function() {
  'use strict';

  function HorariosCtrl() {
    var vm;

    vm = this;
    vm.form = {};

    vm.novoAgendamento = novoAgendamento;

    // ====

    function novoAgendamento() {
      console.log(vm.form);
    }

    // ====
  }

  angular
  .module('Barber.horarios')
  .controller('HorariosCtrl', HorariosCtrl);
})();
