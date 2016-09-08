'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:MailComposeCtrl
 * @description
 * # MailComposeCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('MailComposeCtrl', function ($scope) {
    $scope.availableRecipients = ['RLake@nec.gov','RBastian@lacus.io','VMonroe@orci.ly','YMckenzie@mattis.gov','VMcmyne@molestie.org','BKliban@aliquam.gov','HHellems@tincidunt.org','KAngell@sollicitudin.ly'];
  });
