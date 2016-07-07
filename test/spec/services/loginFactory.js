'use strict';

describe('Service: loginFactory', function () {

  // load the service's module
  beforeEach(module('odaChallengeApp'));

  // instantiate service
  var login;
  beforeEach(inject(function (_login_) {
    login = _login_;
  }));

  it('should do something', function () {
    expect(!!login).toBe(true);
  });

});
