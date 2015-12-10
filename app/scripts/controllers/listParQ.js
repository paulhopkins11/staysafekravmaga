'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:ListParQCtrl
 * @description
 * # ListParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('ListParQCtrl', ['$scope','ParQService', function ($scope, ParQService) {
	  $scope.parqs = ParQService.getParQs();
	  $scope.removeParQ = function(parq) {
		  ParQService.removeParQ(parq);
	  }
	  
	  
	  }]);
