'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:AdultParQCtrl
 * @description
 * # AdultParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('AdultParQCtrl', ['$scope','ParQService', function ($scope,ParQService) {
	  $scope.reset = function() {
		  return {firstname:'NEW',
				  surname:'NE',
				  email: 'N@W',
				  dob: '01/02/99' };		  
	  }
	  $scope.parq = $scope.reset();
	  $scope.save = function() {
		  ParQService.addParQ($scope.parq);
	  }
  }]);