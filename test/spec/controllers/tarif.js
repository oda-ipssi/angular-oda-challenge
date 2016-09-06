'use strict';

describe('Controller: TarifCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var TarifCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TarifCtrl = $controller('TarifCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TarifCtrl.awesomeThings.length).toBe(3);
  });
});
