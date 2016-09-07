'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('NavCtrl', function ($scope) {
    $scope.oneAtATime = false;

    $scope.status = {
      isFirstOpen: true,
      isSecondOpen: true,
      isThirdOpen: true
    };

  });
