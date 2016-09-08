'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:DatabaseCtrl
 * @description
 * # DatabaseCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('DatabaseCtrl', function ($scope, $http, $state) {
    var jsonPostDatas = false;
    $scope.dbDatas    = false;
    $scope.gridsDatas = [];
    $scope.dbName     = false;

    var getDbDatas = function(_jsonDatas) {
      $http.post('http://127.0.0.1:8000/get-data/user-table', {'data':_jsonDatas}).then(
        function(successGetDbDatas) {
          console.log(successGetDbDatas);
          $scope.dbDtas = successGetDbDatas.data.data;
        },
        function(errorGetDbDatas) {

        }
      );
    };

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $scope.dbName = $state.params.dbname;

      jsonPostDatas = {
        'tableName': $state.params.dbname
      }

      getDbDatas(jsonPostDatas);
    });
  });
