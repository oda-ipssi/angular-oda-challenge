'use strict';

angular.module('odaChallengeApp')

  .controller('mtCardsCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Cards',
      subtitle: 'Place subtitle here...'
    };

    $scope.imagePath = 'http://placekitten.com/g/800/300';

  });
