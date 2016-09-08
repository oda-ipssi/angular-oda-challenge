'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LogoutCtrl', ['$scope', '$http', '$rootScope', '$cookies', '$location', function ($scope, $http, $rootScope, $cookies, $location) {
    $http.get('http://localhost:8000/logout?token=' + $rootScope.user.token).then(
      function(response) {
        console.log(response);
        $cookies.remove('odaLogin');
        $rootScope.user = false;
        $location.path('/');
      },
      function(response) {
        console.log(response);
        $location.path('/');
      });
  }]);
