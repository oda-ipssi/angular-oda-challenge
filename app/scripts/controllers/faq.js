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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://localhost:8000/DataTest/faq.json').then(function successCallback(response) {
           $scope.questionList = response.data;
           console.log($scope.questionList)
        }, function errorCallback(response){

        });
    });

  }]);
