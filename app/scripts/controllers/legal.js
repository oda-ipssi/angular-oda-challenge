'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:LegalCtrl
 * @description
 * # LegalCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LegalCtrl', ['$scope','$http', function ($scope, $http) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://127.0.0.1:8000/content/mentions-legales').then(
        function(response) {
          console.log(response);
          $scope.pageContent = response.data.data.content;
        },

        function(response){
          console.log(response);
        }
      );
    });
  }]);
