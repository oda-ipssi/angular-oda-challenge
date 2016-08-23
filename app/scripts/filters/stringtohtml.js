'use strict';

/**
 * @ngdoc filter
 * @name odaChallengeApp.filter:stringToHtml
 * @function
 * @description
 * # stringToHtml
 * Filter in the odaChallengeApp.
 */
angular.module('odaChallengeApp')
  .filter('stringToHtml', function ($sce) {
    return $sce.trustAsHtml;
  });
