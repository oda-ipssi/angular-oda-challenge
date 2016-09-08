'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TarifsCtrl
 * @description
 * # TarifsCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TarifsCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
      $scope.gridOptions = {
        data: '',
        columnDefs: [
          {
            field: 'title',
            displayName: 'Title'
          },
          {
            field: 'price',
            displayName: 'Price'
          },
          {
            field: 'edit',
            displayName: 'Edit',
            cellTemplate: '<button ui-sref="editTarif({tarifId: row.entity.id})">Edit</button><button>Desactivate</buton>'
          }
        ]
      };

      $scope.testData = function(data) {
        console.log('testData:',data);
      };

      $scope.users = false;

      $http.get( 'http://localhost:8000/admin/offers?token=' + $rootScope.user.token  ).then(
        function(data) {
            console.log(data.data.data);
          $scope.gridOptions.data = data.data.data;
        },

        function(errorGetUsers) {
          console.log(errorGetUsers);
        }

      );
  }]);
