'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('FaqCtrl', ['$scope','$http', function ($scope, $http) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://127.0.0.1:6969/faq.json').then(
        function (response) {
          console.log(response.data);
           $scope.questionList = response.data;
           //console.log($scope.questionList)
        },
        function (response) {
          console.log(response);
        });
    });

  }]);
