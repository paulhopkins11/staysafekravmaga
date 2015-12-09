'use strict';

describe('Controller: AdultParQCtrl', function () {

  // load the controller's module
  beforeEach(module('staySafeApp'));

  var adultParQ,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    adultParQ = $controller('AdultParQCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(adultParQ.awesomeThings.length).toBe(3);
  });
});
