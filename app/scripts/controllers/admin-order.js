'use strict';

/**
* @ngdoc function
* @name odaChallengeApp.controller:OrderCtrl
* @description
* # OrderCtrl
* Controller of the odaChallengeApp
*/
angular.module('odaChallengeApp')

.controller('OrderCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state){

    $scope.page = {
        title: 'Commandes',
        subtitle: 'Liste'
    };

    var currentId = $state.params.id;

    $http.get('http://127.0.0.1:8000/admin/orders/'+currentId+'?token=' + $rootScope.user.token).then(
      function(response) {
          console.log(response.data);
          $scope.order = response.data.data;
      },
      function(response) {
        console.log(response);
      });



      $scope.formatDate = function(date){
              var dateOut = new Date(date);
              return dateOut;
        };

}])
;
