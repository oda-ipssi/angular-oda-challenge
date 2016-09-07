'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:UiGridCtrl
 * @description
 * # UiGridCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('GridCtrl', function ($scope) {
    $scope.page = {
      title: 'Grid',
      subtitle: 'Place subtitle here...'
    };
  });
