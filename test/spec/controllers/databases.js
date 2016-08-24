'use strict';

describe('Controller: DatabasesCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var DatabasesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabasesCtrl = $controller('DatabasesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatabasesCtrl.awesomeThings.length).toBe(3);
  });
});
