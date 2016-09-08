'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:OffcanvaslayoutCtrl
 * @description
 * # OffcanvaslayoutCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('OffcanvaslayoutCtrl', function ($scope) {
    $scope.page = {
      title: 'Off-canvas sidebar',
      subtitle: 'On small devices'
    };
  });
