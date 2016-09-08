'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DatabasesCtrl
 * @description
 * # DatabasesCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DatabasesCtrl', function ($scope, $http) {
    $scope.databases = false;

    /**
     * Get databases
     * @return {object} Array of databases
     */
    var getDatabases = function() {
      $http.post('http://127.0.0.1:8000/get/user-table').then(
        function(successGetDatabases) {
          console.log(successGetDatabases.data.data);
          $scope.databases = successGetDatabases.data.data;
        },

        function(errorGetDatabases) {
          throw new Error(errorGetDatabases.message);
        }
      );
    };

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();
      getDatabases();
    });
  });
