'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TarifCtrl
 * @description
 * # TarifCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TarifCtrl', ['$scope','$http', '$rootScope', function ($scope, $http, $rootScope) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();
      $http.get('http://localhost:8000/offers?token=' + $rootScope.user.token).then(
        function(response) {
          console.log(response);
           $scope.tarifList = response.data.data;
           console.log($scope.tarifList);
        },

        function(response) {
          console.log(response);
        });

      $http.get('http://localhost:8000/subscription?token='+$rootScope.user.token).then(
        function(response) {
          if(response.data){
            var offerId = response.data.data.order[(response.data.data.order.length)-1].offer_id;
            var offerStatus = response.data.data.order[0].status;
            
            if(offerStatus !== 3) {
              $scope.aboEnCours = offerId;
              console.log(offerId)
            }
          }
        },
        function(response){
          console.log(response);
        }
      );

    });

    $scope.subscribe = function(id){
      console.log($rootScope.user.token);
      var data = {
          data: {

          }
        };
      data.data.offerId = id;
      //data.data.Order = null;

      $http.get('http://localhost:8000/subscription?token='+ $rootScope.user.token).then(
        function(response) {
          if(!response.data){
            if(id !== 1){
              window.location.href ='http://localhost:8000/checkout/'+id+'?token='+$rootScope.user.token;
            }
            else {
              $http.post('http://localhost:8000/subscription?token=' + $rootScope.user.token, data).then(function(successResponse) {
                  console.log(successResponse);
              }, function(errorResponse) {
                  console.log(errorResponse);
              });
            }
          }
          else {

            var orderId = response.data.data.order[0].id;
            console.log(id);
            if(id !== 1){
              window.location.href ='http://localhost:8000/checkout/'+id+'?token='+$rootScope.user.token;
            }
            else{
              $http.put('http://localhost:8000/subscription/' + orderId + '?token=' + $rootScope.user.token, data).then(function(successResponse) {
                console.log(successResponse);
            }, function(errorResponse) {
                console.log(errorResponse);
            });
            }
          }

        },
        function(response){
          console.log(response);
        }
      );

      
    }

  }]);
