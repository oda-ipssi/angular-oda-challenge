'use strict';

describe('Controller: EdittarifCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var EdittarifCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdittarifCtrl = $controller('EdittarifCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EdittarifCtrl.awesomeThings.length).toBe(3);
  });
});
