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

    $scope.getContent = function(){
    	$http.get('http://localhost:8000/DataTest/gsc.json').success(function(data) {
		$scope.pageContent = data;
		console.log($scope.pageContent)
		});
    };
  }]);
