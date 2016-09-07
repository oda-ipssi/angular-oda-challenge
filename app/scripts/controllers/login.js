'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LoginCtrl', ['$scope','$http', '$rootScope', function ($scope, $http, $rootScope) {

    var data = {};
    $scope.user = {};

    $scope.login = function(user) {
      $scope.errorMail = '';
      $scope.errorPwd = '';

      var check = true;

      if( !user.email || user.email === '' ) {
        $scope.errorMail = 'Merci de renseigner votre adresse mail';
        check = false;
      }

      if( !user.password || user.password === '' ) {
        $scope.errorPwd = 'Merci de renseigner votre mot de passe';
        check = false;
      }

      if( check === true ) {
        data = {
          data: user
        };

        $http.post('http://localhost:8000/sign-in', data).then(
          function(successResponse) {
            console.log(successResponse);
            $rootScope.idSession = successResponse.data.idSession;
            $rootScope.token = successResponse.data.token;
          },
          function(errorResponse) {
            console.log('Error:', errorResponse);
          }
      );
      }
    };
  }]);
