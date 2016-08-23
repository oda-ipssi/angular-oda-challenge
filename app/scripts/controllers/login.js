'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LoginCtrl', ['$scope','$http', function ($scope, $http) {

    $scope.master = {};
    $scope.user = {};

    $scope.login = function(user) {
      $scope.errorMail = '';
      $scope.errorPwd = '';

      var check = true;

      if( !user.mail || user.mail === '' ) {
        $scope.errorMail = 'Merci de renseigner votre adresse mail';
        check = false;
      }

      if( !user.pwd || user.pwd === '' ) {
        $scope.errorPwd = 'Merci de renseigner votre mot de passe';
        check = false;
      }

      if( check === true ) {
        $http.post('http://localhost:8000/login', user);
      }

    };
  }]);
