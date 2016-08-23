'use strict';

describe('Controller: TestjsonCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var TestjsonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestjsonCtrl = $controller('TestjsonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestjsonCtrl.awesomeThings.length).toBe(3);
  });
});
