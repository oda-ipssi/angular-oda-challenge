'use strict';

describe('Controller: MotivationCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var MotivationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MotivationCtrl = $controller('MotivationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MotivationCtrl.awesomeThings.length).toBe(3);
  });
});
