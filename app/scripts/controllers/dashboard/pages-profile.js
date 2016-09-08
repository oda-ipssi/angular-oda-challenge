'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesProfileCtrl
 * @description
 * # PagesProfileCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.page = {
      title: 'Profile Page',
      subtitle: 'Place subtitle here...'
    };
  });
