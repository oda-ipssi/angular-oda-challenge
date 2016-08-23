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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://localhost:8000/DataTest/gsc.json').then(function successCallback(response) {
           $scope.pageContent = response.data;
        }, function errorCallback(response){

        });
    });
  }]);
