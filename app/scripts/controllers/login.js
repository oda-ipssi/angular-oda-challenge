'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('LoginCtrl', ['$scope','$http','ajaxFactory', function ($scope, $http, ajaxFactory) {

    $scope.master = {};
    $scope.login = function(user){
      var verif = true;
      console.log(user);
      if(!user || !user.mail || user.mail === ''){
        $scope.errorMail = 'Merci de renseigner votre adresse mail';
        verif = false;
      }

      if(!user || !user.pwd || user.pwd === ''){
        $scope.errorPwd = 'Merci de renseigner votre mot de passe';
        verif = false;
      }

      if(verif === true) {
        ajaxFactory.post('login', $scope.user);
      }
    };
  }]);
