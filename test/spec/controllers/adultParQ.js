'use strict';

describe('Controller: AdultParQCtrl', function () {

  // load the controller's module
  beforeEach(module('staySafeApp'));

  var AdultParQCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdultParQCtrl = $controller('AdultParQCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdultParQCtrl.awesomeThings.length).toBe(3);
  });
});
