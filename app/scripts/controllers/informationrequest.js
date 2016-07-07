'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:InformationrequestCtrl
 * @description
 * # InformationrequestCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('InformationrequestCtrl', ['$scope','$http', function ($scope, $http) {

  	$scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://localhost:8000/DataTest/phone.json').then(function successCallback(response) {
           $scope.phone = response.data.phone;
           console.log($scope.phone)
        }, function errorCallback(response){

        });
    });

    $scope.reqInfo = {};

    $scope.sendQuestion = function(reqInfo){

	    $scope.errorSubject = ""
		$scope.errorMessage = ""

      var check = true;

      if(!reqInfo.subject || reqInfo.subject == ""){
        $scope.errorSubject = "Merci de renseigner un sujet";
        check = false
      }

      if(!reqInfo.message || reqInfo.message == ""){
        $scope.errorMessage = "Merci d'indiquer votre problème";
        check = false
      }

      if(check == true)
        $http.post('http://localhost:8000/supportContact', reqInfo)
    	
    };

  }]);
