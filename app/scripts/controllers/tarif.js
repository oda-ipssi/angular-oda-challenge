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
      $http.get('http://127.0.0.1:8000/offers?token=' + $rootScope.user.token).then(
        function(response) {
          console.log(response);
           $scope.tarifList = response.data.data;
           console.log($scope.tarifList);
        },

        function(response) {
          console.log(response);
        });
    });

    $scope.subscribe = function(id){
      console.log($rootScope.user.token);
      var data = {
          data: {

          }
        };
      data.data.offerId = id;
      //data.data.Order = null;

      $http.get('http://127.0.0.1:8000/subscription?token='+$rootScope.user.token).then(
        function(response) {
          console.log(response);
          if(!response.data){
            $http.post('http://127.0.0.1:8000/subscription?token=' + $rootScope.user.token, data).then(function(successResponse) {
                console.log(successResponse);
            }, function(errorResponse) {
                console.log(errorResponse);
            });
          }
          else {

            var orderId = response.data.data.order[0].id;
            console.log(orderId);
            console.log(data);
            $http.put('http://127.0.0.1:8000/subscription/' + orderId + '?token=' + $rootScope.user.token, data).then(function(successResponse) {
              console.log(successResponse);
          }, function(errorResponse) {
              console.log(errorResponse);
          });
          }


        },
        function(response){
          console.log(response);
        }
      );


    };

  }]);
