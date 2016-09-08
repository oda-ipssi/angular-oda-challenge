'use strict';

/**
* @ngdoc function
* @name odaChallengeApp.controller:DashboardCtrl
* @description
* # DashboardCtrl
* Controller of the odaChallengeApp
*/
angular.module('odaChallengeApp')

.controller('DashboardCtrl', function($scope,$http){
    $scope.page = {
        title: 'Dashboard',
        subtitle: 'ODA4'
    };



    $scope.getUsers = function(){
        $http.get('http://localhost:8000/admin/dashboard/active-users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9zaWduLWluIiwiaWF0IjoxNDczMzIzMDkxLCJleHAiOjE0NzMzMjY2OTEsIm5iZiI6MTQ3MzMyMzA5MSwianRpIjoiZGQyZDM4NmQ5NDY4OWQ1ZTdlMTA4NThkYTM1N2QwODQifQ.uyc9voxB7crVJeobLiA6BGlQpghIy5YnnMNNivNURYp3A18TyAm8IHf8cae-OWA3TI6Xo4UMcmI8VJ3dX7-hdg').then(
          function(response) {
             $scope.users_number = response.data.data.number;
             $scope.total_admin = response.data.data.total_admin;
             $scope.total_customer = response.data.data.total_customer;
             $scope.total_registered = response.data.data.total_registered;
          },
          function(response) {
            console.log(response);
          });
    };
    $scope.getCommandes = function(){
        $http.get('http://localhost:8000/admin/dashboard/valid-orders?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9zaWduLWluIiwiaWF0IjoxNDczMzIzMDkxLCJleHAiOjE0NzMzMjY2OTEsIm5iZiI6MTQ3MzMyMzA5MSwianRpIjoiZGQyZDM4NmQ5NDY4OWQ1ZTdlMTA4NThkYTM1N2QwODQifQ.uyc9voxB7crVJeobLiA6BGlQpghIy5YnnMNNivNURYp3A18TyAm8IHf8cae-OWA3TI6Xo4UMcmI8VJ3dX7-hdg').then(
          function(response) {
             $scope.commandes_number = response.data.data.number;
             $scope.total_sub1 = response.data.data.total_sub1;
             $scope.total_sub2 = response.data.data.total_sub2;
             $scope.total_sub3 = response.data.data.total_sub3;
             $scope.commandes_sum = response.data.data.sum;
             $scope.sum_sub1 = response.data.data.sum_sub1;
             $scope.sum_sub2 = response.data.data.sum_sub2;
             $scope.sum_sub3 = response.data.data.sum_sub3;
          },
          function(response) {
            console.log(response);
          });
    };

    $scope.getUsers();
    $scope.getCommandes();
})

.controller('RealtimeLoadCtrl', function($scope, $interval){
    $scope.options1 = {
        renderer: 'area',
        height: 133
    };

    $scope.seriesData = [ [], []];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 50; i++) {
        random.addData($scope.seriesData);
    }

    var updateInterval = 800;

    $interval(function() {
        random.removeData($scope.seriesData);
        random.addData($scope.seriesData);
    }, updateInterval);

    $scope.series1 = [{
        name: 'Series 1',
        color: 'steelblue',
        data: $scope.seriesData[0]
    }, {
        name: 'Series 2',
        color: 'lightblue',
        data: $scope.seriesData[1]
    }];

    $scope.features1 = {
        hover: {
            xFormatter: function(x) {
                return new Date(x * 1000).toUTCString();
            },
            yFormatter: function(y) {
                return Math.floor(y) + '%';
            }
        }
    };
})

.controller('MessageWidgetCtrl', function($scope){
  $scope.availableRecipients = ['RLake@nec.gov','RBastian@lacus.io','VMonroe@orci.ly','YMckenzie@mattis.gov','VMcmyne@molestie.org','BKliban@aliquam.gov','HHellems@tincidunt.org','KAngell@sollicitudin.ly'];
  $scope.recipients = {};
  $scope.recipients.emails = ['RLake@nec.gov','VMonroe@orci.ly'];

  $scope.messageContent = '<h3>Bonjour,</h3><p>Lorem ipsum dolor sit amet.... bla bla bla</p><p>Cordialement</p><p>ODA4 Team</p>';
})

.controller('AppointmentsWidgetCtrl', function($scope){
  $scope.date = new Date();
})
;
