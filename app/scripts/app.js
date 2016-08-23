'use strict';

/**
 * @ngdoc overview
 * @name odaChallengeApp
 * @description
 * # odaChallengeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('odaChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.grid',
    'ngMaterial'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

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
      .state('inscription', {
        url: '/inscription',
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      })
      .state('testjson', {
        url: '/testjson',
        templateUrl: 'views/testjson.html',
        controller: 'TestjsonCtrl'
      });
  });


app.controller('AppCtrl', ['$scope', function($scope) {  
  $scope.toggleSearch = false;
  $scope.headers = [{
    name: '',
    field: 'thumb'
  }, {
    name: 'Name',
    field: 'name'
  }, {
    name: 'Online',
    field: 'online'
  }, {
    name: 'Content',
    field: 'content'
  }];

  $scope.content = [{
    thumb: 'https://lh3.googleusercontent.com/-5NfcdlvGQhs/AAAAAAAAAAI/AAAAAAAAABY/ibGrApGYTuQ/photo.jpg',
    name: 'Stéphane',
    online: true,
    content: 'Bacon ipsum dolor amet sirloin jerky leberkas porchetta short ribs biltong short loin pork chuck andouille.'
  }, {
    thumb: 'http://www.otakia.com/wp-content/uploads/V_1/article_3573/7405.jpg',
    name: 'Sarkolkany',
    online: true,
    content: ' swine fatback tri-tip turkey bacon. Pig porchetta spare ribs, drumstick kielbasa bacon ham. Jerky ground round beef, jowl pancetta pig beef ribs turkey spare ribs t-bone strip steak tongue6'
  }, {
    thumb: 'http://peliculassimilares.com/static/images/character/1/74-marty-martin-seamus-mcfly.jpg',
    name: 'McFly',
    online: false,
    content: 'kielbasa. Fatback shankle strip steak t-bone, corned beef cupim swine beef venison landjaeger brisk'
  }, {
    thumb: 'http://vignette4.wikia.nocookie.net/theswanprincess/images/2/21/JB-007-300x240.png/revision/latest?cb=20160201224549',
    name: 'Jean-Bob',
    online: false,
    content: 'Pig leberkas shoulder hamburger sirloin ground round biltong brisket prosciutto. Kielbasa andouille prosciutto short loin'
  }, {
    thumb: 'http://thatgrapejuice.net/wp-content/uploads/2014/03/lady-gaga-that-grape-juice-televisionjpg.jpg',
    name: 'Lady Gagouille',
    online: false,
    content: 'ball tip hamburger jowl bresaola ham filet mignon. Beef landjaeger shankle chicken frankfurter shank porchetta.'
  }];

  $scope.custom = {
    name: 'bold',
    online: 'grey',
    content: 'grey'
  };
  $scope.sortable = ['name', 'online', 'content'];
  $scope.thumbs = 'thumb';
  $scope.count = 3;
}]);

app.directive('mdTable', function() {
  return {
    restrict: 'E',
    scope: {
      headers: '=',
      content: '=',
      sortable: '=',
      filters: '=',
      customClass: '=customClass',
      thumbs: '=',
      count: '='
    },
    controller: function($scope, $filter, $window) {
      var orderBy = $filter('orderBy');
      $scope.tablePage = 0;
      $scope.nbOfPages = function() {
          return Math.ceil($scope.content.length / $scope.count);
        },
        $scope.handleSort = function(field) {
          if ($scope.sortable.indexOf(field) > -1) {
            return true;
          } else {
            return false;
          }
        };
      $scope.order = function(predicate, reverse) {
        $scope.content = orderBy($scope.content, predicate, reverse);
        $scope.predicate = predicate;
      };
      $scope.order($scope.sortable[0], false);
      $scope.getNumber = function(num) {
        return new Array(num);
      };
      $scope.goToPage = function(page) {
        $scope.tablePage = page;
      };
    },
    template: angular.element(document.querySelector('#md-table-template')).html()
  }
});



app.filter('startFrom',function (){
  return function (input,start) {
    start = +start;
    return input.slice(start);
  }
});
