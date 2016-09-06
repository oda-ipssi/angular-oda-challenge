'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('PagesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://localhost:8000/content/all').then(
        function(response) {
<<<<<<< HEAD
          console.log(response);
           $scope.pages = response.data.data;
           console.log($scope.pages);
        },

        function(response) {
          console.log(response);
=======
           $scope.pages = response.data.data;
        },
        function(response) {

>>>>>>> 0cd1b500cf75987aeb985c5504a0fbae0f1d358e
        });
    });

    $scope.onChange = function() {
<<<<<<< HEAD
      $scope.url = JSON.parse($scope.url);
      $scope.tinymceModel = $scope.url.content;
      console.log($scope.url);
=======
      if ($scope.url !== null) {
        $scope.tinymceModel = $scope.url.content;
      } else {
        $scope.tinymceModel = '';
      }
>>>>>>> 0cd1b500cf75987aeb985c5504a0fbae0f1d358e
    };

    $scope.updateContent = function() {
      var data = {
        data : {
          title: $scope.url.title,
          url: $scope.url.url,
          content: $scope.tinymceModel
        }
      };

      console.log('http://localhost:8000/content' + $scope.url.url + '/update');

      $http.post('http://localhost:8000/content' + $scope.url.url + '/update', data).then(function(successResponse) {
          console.log(successResponse);
<<<<<<< HEAD
      }, function(errorResponse) {
          console.log(errorResponse);
=======

          $http.get('http://localhost:8000/content/all').then(
            function(response) {
               $scope.pages = response.data.data;
            },
            function(response) {

            });
      }, function(errorResponse) {

>>>>>>> 0cd1b500cf75987aeb985c5504a0fbae0f1d358e
      });
    };
  }]);
