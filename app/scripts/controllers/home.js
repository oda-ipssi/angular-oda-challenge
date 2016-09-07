'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('HomeCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  (function($) {
        $('.flexslider').flexslider({
          animation: "slide",
  		directionNav: true,
  		controlNav: true,
  		slideshow: true,
        });

        $('.imac-device').flexslider({
          animation: "slide",
  		directionNav: false,
  		controlNav: false,
  		slideshow: true,
  		pausePlay: true,
  		mousewheel: true,
        });
  })(jQuery);