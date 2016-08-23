'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DatatestCtrl
 * @description
 * # DatatestCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DatatestCtrl', ['$scope','$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://127.0.0.1:6969/test.json').then(function successCallback(response) {
          console.log(response.data)
           $scope.test = response.data;
           //console.log($scope.questionList)
        }, function errorCallback(response){

        });
    });

  }]);
