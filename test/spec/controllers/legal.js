'use strict';

describe('Controller: LegalCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var LegalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegalCtrl = $controller('LegalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LegalCtrl.awesomeThings.length).toBe(3);
  });
});
