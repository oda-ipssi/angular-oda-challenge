'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('HelpCtrl', function ($scope) {
     $scope.page = {
      title: 'Documentation',
      subtitle: 'Place subtitle here...'
    };
  });
