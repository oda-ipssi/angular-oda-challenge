'use strict';

describe('Filter: stringToHtml', function () {

  // load the filter's module
  beforeEach(module('odaChallengeApp'));

  // initialize a new instance of the filter before each test
  var stringToHtml;
  beforeEach(inject(function ($filter) {
    stringToHtml = $filter('stringToHtml');
  }));

  it('should return the input prefixed with "stringToHtml filter:"', function () {
    var text = 'angularjs';
    expect(stringToHtml(text)).toBe('stringToHtml filter: ' + text);
  });

});
