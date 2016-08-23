'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:CgvCtrl
 * @description
 * # CgvCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('GscCtrl',['$scope','$http', '$location', function ($scope, $http, $location) {

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://' + $location.host() + ':' + $location.port() + '/json/cgv.json').then(function successCallback(response) {
        console.log(response);
        $scope.pageContent = response.data.data.content;
      }, function errorCallback(response){
        console.log(response);
      });
    });
  }]);
