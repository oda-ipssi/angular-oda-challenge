'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:CgvCtrl
 * @description
 * # CgvCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('GscCtrl',['$scope','$http', function ($scope, $http) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();
      $http.get('http://localhost:8000/DataTest/gsc.json').then(
        function (response) {
           $scope.pageContent = response.data;
        },
        function (response){
          console.log(response);
        });
    });
  }]);
