'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:MailInboxCtrl
 * @description
 * # MailInboxCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('MailInboxCtrl', function ($scope, $resource) {
    $scope.mails = $resource('scripts/jsons/mails.json').query();

    $scope.selectedAll = false;

    $scope.selectAll = function () {

      if ($scope.selectedAll) {
        $scope.selectedAll = false;
      } else {
        $scope.selectedAll = true;
      }

      angular.forEach($scope.mails, function(mail) {
        mail.selected = $scope.selectedAll;
      });
    };
  });
