'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesChatCtrl
 * @description
 * # PagesChatCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('ChatCtrl', function ($scope, $resource) {
    $scope.inbox = $resource('scripts/jsons/chats.json').query();

    $scope.archive = function(index) {
      $scope.inbox.splice(index, 1);
    };
  });
