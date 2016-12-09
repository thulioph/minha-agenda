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

      Facebook.login();
    }

    function _signupWithGoogle() {
      console.warn('Cadastro com Google');
    }

    function SignupFacebook(evt, obj) {
      var user_obj;

      user_obj = {
        name: obj.user_info.name,
        email: obj.user_info.email,
        gender: obj.user_info.gender,
        social_id: obj.user_info.id,
        picture: obj.user_info.picture.data.url,
        social: 'facebook'
      };

      ApiService.signup(user_obj).then(function(result) {
        $rootScope.user = result;
        $state.go('home');

        Utils.progressbar.complete();
      });
    }

    // ====

    $rootScope.$on('fb_ok', SignupFacebook);
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
