'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:EdittarifCtrl
 * @description
 * # EdittarifCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('EdittarifCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
    console.log($state.params.tarifId);


      $scope.$on('$viewContentLoaded', function(event) {
        event.preventDefault();

        $http.get( 'http://localhost:8000/admin/offers?token=' + $rootScope.user.token  ).then(
          function(data) {
              for (var i = 0; i < data.data.data.length; i++) {
                  if (data.data.data[i].id.toString() === $state.params.tarifId) {
                      $scope.tarif = data.data.data[i];
                      console.log($scope.tarif);
                  }
              }
          },

          function(errorGetUsers) {
            console.log(errorGetUsers);
          });
      });

      $scope.submit = function() {
          var data = {
              data: $scope.tarif
          };
          $http.put('http://localhost:8000/admin/offers/' + $state.params.tarifId + '?token=' + $rootScope.user.token, data).then(
              function(success) {
                  console.log(success);
              },
              function(error) {
                  console.log(error);
              }
          );
      };
}]);
