'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:ListParQCtrl
 * @description
 * # ListParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('ListParQCtrl', ['$scope','ParQService', 'UploadService', function ($scope, ParQService, UploadService) {
	  $scope.parqs = ParQService.getParQs();
	  $scope.removeParQ = function(parq) {
			var index = $scope.parqs.indexOf(parq);
			if (index > -1) {
				$scope.parqs.splice(index, 1);
			}
		  ParQService.saveParQs($scope.parqs);
	  };
	  $scope.uploadParQ = function(parq) {
		  UploadService.uploadParQ(parq);
	  };
	  
	  }]);
