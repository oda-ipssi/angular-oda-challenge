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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://localhost:8000/DataTest/tarifList.json').then(function successCallback(response) {
           $scope.tarifList = response.data;
           console.log($scope.tarifList)
        }, function errorCallback(response){

        });
    });

  }]);
