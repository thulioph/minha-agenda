(function() {
  'use strict';

  function LoginCtrl($rootScope, Facebook, Google, ApiService, Auth) {
    var vm;

    vm = this;
    vm.progressbar = ApiService.progressbar;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      vm.progressbar.start();

      Facebook.login();
    }

    function loginGoogle() {
      vm.progressbar.start();

      Google.login();
    }

    function oAuthUserFB(evt, obj) {
      var user_obj;

      user_obj = {
        name: obj.user_info.name,
        email: obj.user_info.email,
        gender: obj.user_info.gender,
        social_id: obj.user_info.id,
        picture: obj.user_info.picture.data.url
      };

      Auth.Facebook(user_obj);
    }

    function oAuthUserGL(evt, obj) {

      console.info(obj.user_info);

      var user_obj;

      user_obj = {
        name: obj.user_info.names[0].displayName,
        email: obj.user_info.emailAddresses[0].value,
        social_id: obj.user_info.metadata.sources[0].id,
        picture: obj.user_info.photos[0].url
      };

      if (obj.user_info.genders) {
        user_obj.gender = obj.user_info.genders[0].value
      }

      Auth.Google(user_obj);
    }

    function AuthOk(evt, obj) {
      vm.user_info = obj;
      vm.progressbar.complete();
    }

    // ====

    $rootScope.$on('fb_ok', oAuthUserFB);
    $rootScope.$on('gl_ok', oAuthUserGL);
    $rootScope.$on('auth_ok', AuthOk);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    'Facebook',
    'Google',
    'ApiService',
    'Auth'
  ];

  angular
  .module('Login.ctrl', [])
  .controller('LoginCtrl', LoginCtrl);
})();
