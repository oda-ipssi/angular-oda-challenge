'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:AbonnementCtrl
 * @description
 * # AbonnementCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('AbonnementCtrl', ['$scope', '$http', function ($scope, $http) {

  	$scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://localhost:8000/abonnement').then(
        function(response) {
          console.log(response);
          $scope.abonnement = response.data.data.abonnement;
        },
        function(response){
          console.log(response);
        }
      );
    });

  }]);
