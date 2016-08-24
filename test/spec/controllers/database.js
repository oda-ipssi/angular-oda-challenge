'use strict';

describe('Controller: DatabaseCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var DatabaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabaseCtrl = $controller('DatabaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatabaseCtrl.awesomeThings.length).toBe(3);
  });
});
