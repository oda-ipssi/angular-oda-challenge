'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:FormsWizardCtrl
 * @description
 * # FormsWizardCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('FormWizardCtrl', function ($scope) {
    $scope.page = {
      title: 'Form Wizard',
      subtitle: 'Place subtitle here...'
    };
  });
