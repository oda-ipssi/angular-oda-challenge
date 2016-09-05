'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:ProfilupdateCtrl
 * @description
 * # ProfilupdateCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('ProfilCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://localhost:8000/account/6').then(
        function(response) {
           $scope.profil = response.data.data;
           console.log($scope.profil);
        },

        function(response) {
          console.log(response);
        });
    });
  }]);
