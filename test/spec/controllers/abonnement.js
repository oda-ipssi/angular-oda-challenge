'use strict';

describe('Controller: AbonnementCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var AbonnementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AbonnementCtrl = $controller('AbonnementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AbonnementCtrl.awesomeThings.length).toBe(3);
  });
});
