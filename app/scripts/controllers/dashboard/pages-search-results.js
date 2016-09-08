'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesSearchResultsCtrl
 * @description
 * # PagesSearchResultsCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('SearchResultsCtrl', function ($scope) {
    $scope.page = {
      title: 'Search Results',
      subtitle: 'Place subtitle here...'
    };
  });
