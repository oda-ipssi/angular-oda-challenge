'use strict';

describe('Controller: InformationrequestCtrl', function () {

  // load the controller's module
  beforeEach(module('odaChallengeApp'));

  var InformationrequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformationrequestCtrl = $controller('InformationrequestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InformationrequestCtrl.awesomeThings.length).toBe(3);
  });
});
