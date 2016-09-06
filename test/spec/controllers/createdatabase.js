'use strict';

describe('Controller: CreatedatabaseCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var CreatedatabaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatedatabaseCtrl = $controller('CreatedatabaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatedatabaseCtrl.awesomeThings.length).toBe(3);
  });
});
