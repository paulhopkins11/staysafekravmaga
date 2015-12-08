'use strict';

describe('Controller: KidsParQCtrl', function () {

  // load the controller's module
  beforeEach(module('staySafeApp'));

  var KidsParQCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KidsParQCtrl = $controller('KidsParQCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KidsParQCtrl.awesomeThings.length).toBe(3);
  });
});
