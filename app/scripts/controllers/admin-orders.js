'use strict';

/**
* @ngdoc function
* @name odaChallengeApp.controller:OrdersCtrl
* @description
* # OrdersCtrl
* Controller of the odaChallengeApp
*/
angular.module('odaChallengeApp')

.controller('OrdersCtrl', function($scope,$http){
    $scope.page = {
        title: 'Commandes',
        subtitle: 'Liste'
    };

    $http.get('http://localhost:8000/admin/orders?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9zaWduLWluIiwiaWF0IjoxNDczMzIzMDkxLCJleHAiOjE0NzMzMjY2OTEsIm5iZiI6MTQ3MzMyMzA5MSwianRpIjoiZGQyZDM4NmQ5NDY4OWQ1ZTdlMTA4NThkYTM1N2QwODQifQ.uyc9voxB7crVJeobLiA6BGlQpghIy5YnnMNNivNURYp3A18TyAm8IHf8cae-OWA3TI6Xo4UMcmI8VJ3dX7-hdg').then(
      function(response) {
          console.log(response.data);
         $scope.orders = response.data.data;
      },
      function(response) {
        console.log(response);
      });

})
;
