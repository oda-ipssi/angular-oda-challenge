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

<<<<<<< HEAD
    $http.get('http://127.0.0.1:8000/admin/orders/'+currentId+'?token=' + $rootScope.user.token).then(
=======
    $scope.link = 'http://localhost:8000/admin/orders/' + currentId + '/download?token=' + $rootScope.user.token;

    $http.get('http://localhost:8000/admin/orders/'+currentId+'?token=' + $rootScope.user.token).then(
>>>>>>> a7bc4f772b49d43015faa0e6563d296c6eb8b111
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
