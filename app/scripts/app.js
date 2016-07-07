'use strict';

/**
 * @ngdoc overview
 * @name odaChallengeApp
 * @description
 * # odaChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('odaChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
      
      $stateProvider.state('inscription', {
        url: '/inscription',
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      });
  });
