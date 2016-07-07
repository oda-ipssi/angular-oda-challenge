'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:InscriptionCtrl
 * @description
 * # InscriptionCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('InscriptionCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    $scope.inscriptionSubmit = function() {
      var tem = true;
      $scope.usernameMessage = false;
      $scope.emailMessage = false;
      $scope.passwordMessage = false;

      if (typeof $scope.username === 'undefined' || !$scope.username.length) {
        $scope.usernameMessage = "Veuillez entrer un nom d'utilisateur";
        tem = false;
      }

      if (typeof $scope.email === 'undefined' || !$scope.email.length) {
        $scope.emailMessage = "Veuillez entrer une adresse email";
        tem = false;
      }

      if (typeof $scope.password === 'undefined' || !$scope.password.length) {
        $scope.passwordMessage = "Veuillez entrer un mot de passe";
        tem = false;
      } else if (typeof $scope.passwordConfirm === 'undefined' || !$scope.passwordConfirm.length) {
        $scope.passwordMessage = "Veuillez entrer un mot de passe de confirmation";
        tem = false;
      } else if (!angular.equals($scope.password, $scope.passwordConfirm)) {
        $scope.passwordMessage = "Veuillez confirmer votre mot de passe";
        tem = false;
      }

      if (!tem) {
        return false;
      }

      var data = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password
      };

      $http.post('/', data, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then(function(successResponse) {
        console.log(successResponse);
      }, function(errorResponse) {
        console.log(errorResponse);
      });
    };
  }]);
