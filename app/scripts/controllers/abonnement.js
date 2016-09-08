'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:AbonnementCtrl
 * @description
 * # AbonnementCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('AbonnementCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

  	$scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://127.0.0.1:8000/subscription?token='+$rootScope.user.token).then(
        function(response) {
          var offerId = response.data.data.order[(response.data.data.order.length)-1].offer_id;
          var offerStatus = response.data.data.order[(response.data.data.order.length)-1].status;
          $http.get('http://localhost:8000/offers/'+offerId).then(
              function(response) {
                console.log(response);
                var aboTitle = response.data.data.title;
                var aboTarif = response.data.data.price;
                if(offerStatus !== 3) {
                  $scope.aboEnCours = 'Abonnement en cours : ' + aboTitle + ' à ' + aboTarif + '€/mois.';
                  $scope.aboStop = '';
                }
                else {
                  $scope.aboEnCours = 'Vous n\'avez pas d\'abonnement en cours.';
                  $scope.aboStop = 'Vous avez un abonnement : ' + aboTitle + ' à ' + aboTarif + '€/mois actuellement stoppé.';
                }
              },
              function(response){
                console.log(response);
              }
          );
        },
        function(response){
          console.log(response);
        }
      );
    });

  }]);
