'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TarifCtrl
 * @description
 * # TarifCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TarifCtrl', ['$scope','$http','ajaxFactory', function ($scope, $http, ajaxFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getTarifList = function(){
    	//$scope.tarifList = ajaxFactory.get('tarifList.json');
    	$http.get('http://localhost:8000/DataTest/tarifList.json').success(function(data) {
		   $scope.tarifList = data;
		   console.log($scope.tarifList)
		});
    };

  }]);
