'use strict';

describe('Controller: DesabonnementCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var DesabonnementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesabonnementCtrl = $controller('DesabonnementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DesabonnementCtrl.awesomeThings.length).toBe(3);
  });
});
