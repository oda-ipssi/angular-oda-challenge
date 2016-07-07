'use strict';

/**
 * @ngdoc service
 * @name odaChallengeApp.ajaxFactory
 * @description
 * # ajaxFactory
 * Factory in the odaChallengeApp.
 */
angular.module('odaChallengeApp')
  .factory('ajaxFactory', ['$http', function ($http) {

    var api = 'http://localhost:8000/DataTest/';

    return {
      post: function (url, data) {
        var req = {
          method: 'POST',
          url: api + url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
        };

        $http(req).then(function(response) {
          return response;
        }, function(response) {
          return response;
        });
      },

      get: function (url) {
        var req = {
          method: 'GET',
          url: api + url
        };

        $http(req).then(function(response) {
          return response;
        }, function(response) {
          return response;
        });
      }
    };
  }]);