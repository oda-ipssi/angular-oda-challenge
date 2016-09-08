'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:ProfilupdateCtrl
 * @description
 * # ProfilupdateCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('ProfilCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://127.0.0.1:8000/account/' + $rootScope.user.idUser + '?token=' + $rootScope.user.token).then(
        function(response) {
           $scope.profil = response.data.data;
           console.log($scope.profil);
        },

        function(response) {
          console.log(response);
        });
    });
  }]);
