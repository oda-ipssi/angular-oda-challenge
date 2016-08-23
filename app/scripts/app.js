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

        .state('reqInfo', {
          url: '/reqInfo',
          templateUrl: 'views/reqinfo.html',
          controller: 'InformationrequestCtrl'
        })

        .state('tarif', {
          url: '/tarif',
          templateUrl: 'views/tarif.html',
          controller: 'TarifCtrl'
        })

        .state('gsc', {
          url: '/gsc',
          templateUrl: 'views/gsc.html',
          controller: 'GscCtrl'
        })

        .state('faq', {
          url: '/faq',
          templateUrl: 'views/faq.html',
          controller: 'FaqCtrl'
        })

        .state('support', {
          url: '/support',
          templateUrl: 'views/support.html',
          controller: 'SupportCtrl'
        })

        .state('test', {
          url: '/test',
          templateUrl: 'views/datatest.html',
          controller: 'DatatestCtrl'
        });
      
      $stateProvider.state('inscription', {
        url: '/inscription',
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      });

  });
