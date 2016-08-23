'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:TestjsonCtrl
 * @description
 * # TestjsonCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('TestjsonCtrl', function ($http, $scope, $location, $timeout) {
    $scope.jsonDatas = false;

    $http.get('http://' + $location.host() + ':' + $location.port() + '/json/databases.json' ).then(
      function(success) {

        $timeout(function(){
          $scope.jsonDatas = success.data;
          console.log($scope.jsonDatas.values[0].datas[0].datas);
        },false);
      },

      function(error) {
        console.log(error);
      }
    );
  });
