'use strict';

/**
* @ngdoc function
* @name odaChallengeApp.controller:OrderDownloadCtrl
* @description
* # OrderDownloadCtrl
* Controller of the odaChallengeApp
*/
angular.module('odaChallengeApp')

.controller('OrderDownloadCtrl', function($scope,$http,$state){

    $scope.page = {
        title: 'Commandes',
        subtitle: 'Liste'
    };

    var currentId = $state.params.id;

    $http.get('http://localhost:8000/admin/orders/'+currentId+'/download?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9zaWduLWluIiwiaWF0IjoxNDczMzI2ODYyLCJleHAiOjE0NzMzMzA0NjIsIm5iZiI6MTQ3MzMyNjg2MiwianRpIjoiZDZlMTJiMjljYjU3ODgxMTVlYTBkODhjNGExYmJjNzcifQ.oZ5YWpQku80APR4QRfTgTajev1dk8WZfBsOsnAUNJm8wWnCSxkuJS9YL77S_uz6-be26nIilicee-6sZAV_Mfw').then(
      function(response) {
          console.log(response.data);
          $scope.download = response.data.data;
      },
      function(response) {
        console.log(response);
      });



      $scope.formatDate = function(date){
              var dateOut = new Date(date);
              return dateOut;
        };

})
;
