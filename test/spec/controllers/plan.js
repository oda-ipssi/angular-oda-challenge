'use strict';

describe('Controller: PlanCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var PlanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanCtrl = $controller('PlanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlanCtrl.awesomeThings.length).toBe(3);
  });
});
