'use strict';

describe('Controller: ProfilupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var ProfilupdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilupdateCtrl = $controller('ProfilupdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfilupdateCtrl.awesomeThings.length).toBe(3);
  });
});
