'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DbmanagementCtrl
 * @description
 * # DbmanagementCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DbmanagementCtrl',['$scope','$http', function ($scope, $http) {

    $scope.gridsDatas = [];

    $http.get('http://127.0.0.1:6969/databases.json').then(
      function(response) {
        $scope.databases = response.data;
        console.log($scope.databases);
      },

      function(response) {
        console.log(response);
      }
    );
  }]);
