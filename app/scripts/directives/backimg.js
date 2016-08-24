'use strict';

/**
 * @ngdoc directive
 * @name odaChallengeApp.directive:backImg
 * @description
 * # backImg
 */
<<<<<<< HEAD
 app.directive('backImg', function() {
   return function(scope, element, attrs) {
     var url = attrs.backImg;
     element.css({
       'background': 'url(' + url + ') no-repeat top center fixed',
     });
   };
 });
=======
angular.module('odaChallengeApp')
  .directive('backImg', function () {
    return function(scope, element, attrs){
      var url = attrs.backImg;
      element.css({
          'background': 'url(' + url +') no-repeat top center fixed',
      });
    };
  });
>>>>>>> 582047f7692eec6bd4d7f03dc4949bad5ef3dad5
