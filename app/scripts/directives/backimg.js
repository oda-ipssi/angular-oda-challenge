'use strict';

/**
 * @ngdoc directive
 * @name odaChallengeApp.directive:backImg
 * @description
 * # backImg
 */
angular.module('odaChallengeApp')
  .directive('backImg', function () {
    return function(scope, element, attrs){
      var url = attrs.backImg;
      element.css({
          'background': 'url(' + url +') no-repeat top center fixed',
      });
    };
  });
