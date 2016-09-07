'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DesabonnementCtrl
 * @description
 * # DesabonnementCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DesabonnementCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  	$scope.desabo = function(){

  		$http.post('http://localhost:8000/desabonnement/6').then(
        function(response) {
          console.log(response);
          alert("Votre désabonnement a été pris en compte");
          $location.path( "/abonnement" );
        },
        function(response){
          console.log(response);
        }
      );
  	}

  }]);
