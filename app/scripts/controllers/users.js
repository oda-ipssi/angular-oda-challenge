'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('UsersCtrl', function ($scope, $http, $location) {

    $scope.gridOptions = {
      data: '',
      columnDefs: [
        {
          field: 'name',
          displayName: 'Name'
        },
        {
          field: 'age',
          displayName: 'Age'
        },
        {
          field: 'edit',
          displayName: 'Edit',
          cellTemplate: '<button ui-sref="user({userId: row.entity.id})">Edit</button><button>Desactivate</buton>'
        }
      ]
    };

    $scope.testData = function(data) {
      console.log('testData:',data);
    };

    $scope.users = false;

    $http.get( 'http://' + $location.host() + ':' + $location.port() + '/json/users.json' ).then(
      function(successGetUsers) {
        $scope.gridOptions.data = successGetUsers.data;
      },

      function(errorGetUsers) {
        console.log(errorGetUsers);
      }
    );
  });
