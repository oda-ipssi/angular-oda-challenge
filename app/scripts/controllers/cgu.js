'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:CguCtrl
 * @description
 * # CguCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('CguCtrl', ['$scope','$http', '$location', function ($scope, $http, $location) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://' + $location.host() + ':' + $location.port() + '/json/cgv.json').then(
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
