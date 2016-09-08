'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DesabonnementCtrl
 * @description
 * # DesabonnementCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DesabonnementCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {

  	$scope.desabo = function(){

  		$http.get('http://127.0.0.1:8000/subscription?token='+$rootScope.user.token).then(
        function(response) {
          console.log(response);
          var orderId = response.data.data.order[0].id;
          console.log(orderId);
          $http.put('http://127.0.0.1:8000/subscription/'+orderId+'/stop?token='+$rootScope.user.token).then(
              function(response) {
                console.log(response);
                alert('Votre désabonnement a été pris en compte.')
              },
              function(response){
                console.log(response);
              }
          );
        },
        function(response){
          console.log(response);
        }
      );
  	};

  }]);
