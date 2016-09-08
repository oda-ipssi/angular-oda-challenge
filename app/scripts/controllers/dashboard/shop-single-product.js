'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:ShopSingleProductCtrl
 * @description
 * # ShopSingleProductCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('SingleProductCtrl', function ($scope) {
    $scope.page = {
      title: 'Single Product',
      subtitle: 'Place subtitle here...'
    };
  });
