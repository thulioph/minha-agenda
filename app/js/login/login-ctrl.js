(function() {
  'use strict';

  function LoginCtrl($rootScope, $scope, Facebook) {
    var vm;

    vm = this;

    vm.login = {
      facebook: loginFacebook,
      google: loginGoogle
    };

    // ====

    function loginFacebook() {
      Facebook.login();
    }

    function oAuthUser(evt, obj) {
      $scope.$apply(function () {
          vm.fb_user_info = obj.user_info;
      });
    }

    function loginGoogle() {
      console.log('Login com o Google');

      gapi.load('client', _initGogleLogin);
    }

    function _initGogleLogin() {
      gapi.client.init({
        'apiKey': 'AIzaSyDTVFJVhqRTx0-EZADEmMz2giGlyRbzRbw',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest?version=v1'],
        'clientId': '490787298478-l9t0v16t4es8h8hnset7h18nab6l1gju.apps.googleusercontent.com',
        'scope': 'profile'
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      })
    }

    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        // o usuário já está logado
        makeApiCall();
      } else {
        // o usuário não está logado
        // este método irá abrir a janela de login
        gapi.auth2.getAuthInstance().signIn();
      }
    }

    function makeApiCall() {
      gapi.client.people.people.get({
        resourceName: 'people/me'
      }).then(function(resp) {
        console.info(resp.result);
      });
    }

    function GetProfileInformation() {
      var profile = googleUser.getBasicProfile();

      // Do not send to your backend! Use an ID token instead.
      console.log('ID: ' + profile.getId());

      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }

    // ====

    $rootScope.$on('fb_ok', oAuthUser);
  }

  LoginCtrl.$inject = [
    '$rootScope',
    '$scope',
    'Facebook'
  ];

  angular
  .module('Login.ctrl', [])
  .controller('LoginCtrl', LoginCtrl);
})();
