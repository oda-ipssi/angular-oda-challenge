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

<<<<<<< HEAD
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })

        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })

        .state('tarif', {
          url: '/tarif',
          templateUrl: 'views/tarif.html',
          controller: 'TarifCtrl'
        })

=======
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
>>>>>>> master
  });
