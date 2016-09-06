'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TarifCtrl
 * @description
 * # TarifCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TarifCtrl', ['$scope','$http', function ($scope, $http) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();
      $http.get('http://localhost:8000/DataTest/tarifList.json').then(
        function(response) {
           $scope.tarifList = response.data;
           console.log($scope.tarifList);
        },

        function(response) {
          console.log(response);
        });
    });

  }]);
