(function() {
  'use strict';

  function CadastroCtrl($rootScope, ApiService, $state, Facebook, Utils) {
    var vm;

    vm = this;

    // ====

    vm.cadastro = {
      facebook: _signupWithFacebook,
      google: _signupWithGoogle
    };

    // ====

    function _signupWithFacebook() {
      Utils.progressbar.start();

      Facebook.signup();
    }

    function _signupWithGoogle() {
      console.warn('Cadastro com Google');
    }

    function SignupFacebook(evt, obj) {
      var user_obj;

      user_obj = {
        name: obj.user_info.data.name,
        email: obj.user_info.data.email,
        gender: obj.user_info.data.gender,
        social_id: obj.user_info.data.id,
        picture: obj.user_info.data.picture.data.url,
        social: 'facebook'
      };

      ApiService.signup(user_obj).then(function(result) {
        $rootScope.user = result;
        $state.go('home');

        Utils.progressbar.complete();
      });
    }

    // ====

    $rootScope.$on('signup_ok', SignupFacebook);
  }

  CadastroCtrl.$inject = [
    '$rootScope',
    'ApiService',
    '$state',
    'Facebook',
    'Utils'
  ];

  angular
  .module('Barber.cadastro')
  .controller('CadastroCtrl', CadastroCtrl);
})();
