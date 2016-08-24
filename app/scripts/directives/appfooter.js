'use strict';

/**
 * @ngdoc directive
 * @name odaChallengeApp.directive:appFooter
 * @description
 * # appFooter
 */
 app.directive('appFooter', function() {
   return {
     restrict: 'E',
     template: '<p class="footer">&copy; {{ footer.date | date:"yyyy" }} ODA Challenge</p>',
     controller: function() {
       this.date = Date.now();
     },
     controllerAs: 'footer'
   };
 });
