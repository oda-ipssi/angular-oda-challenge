'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('PagesCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://127.0.0.1:8000/admin/contents?token=' + $rootScope.user.token).then(
        function(response) {
          console.log(response);
           $scope.pages = response.data.data;
        },
        function(response) {
          console.log(response);
        });
    });

    $scope.onChange = function() {
      if ($scope.url !== null) {
        $scope.tinymceModel = $scope.url.content;
      } else {
        $scope.tinymceModel = '';
      }
    };

    $scope.updateContent = function() {
      var data = {
        data : {
          title: $scope.url.title,
          url: $scope.url.url,
          content: $scope.tinymceModel
        }
      };

      console.log('http://127.0.0.1:8000/admin/content' + $scope.url.url + '/update?token=' + $rootScope.user.token);

      $http.post('http://127.0.0.1:8000/admin/content' + $scope.url.url + '/update?token=' + $rootScope.user.token, data).then(function(successResponse) {
          console.log(successResponse);

          $http.get('http://127.0.0.1:8000/admin/contents?token=' + $rootScope.user.token).then(
            function(response) {
               $scope.pages = response.data.data;
            },
            function(response) {
              console.log(response);
            });
      }, function(errorResponse) {
          console.log(errorResponse);
      });
    };
  }]);
