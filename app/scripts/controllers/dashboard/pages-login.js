'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.login = function() {
      $state.go('app.dashboard');
    };
  });
