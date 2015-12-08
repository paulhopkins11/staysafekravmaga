'use strict';

describe('Controller: ListParQCtrl', function () {

  // load the controller's module
  beforeEach(module('staySafeApp'));

  var ListParQCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListParQCtrl = $controller('ListParQCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListParQCtrl.awesomeThings.length).toBe(3);
  });
});
