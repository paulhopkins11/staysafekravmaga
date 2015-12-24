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
	  $scope.clearUpload = function() {
		  $scope.uploadFailed = null;
		  $scope.uploadSuccess = null;		  
	  }
	  $scope.uploadParQ = function(parq) {
		  $scope.uploading = 'Uploading ' + parq.firstname + ' ' + parq.surname;
		  UploadService.uploadParQ(parq, function() {
			  $scope.uploading = false;
				// Success
			  $scope.uploadFailed = null;
			  $scope.uploadSuccess = ' Successfully uploaded ' + parq.firstname + ' ' + parq.surname;
		  }, function() {
			  $scope.uploading = false;
				// Failure
			  $scope.uploadSuccess = null;
			  $scope.uploadFailed = ' Failed to upload ' + parq.firstname + ' ' + parq.surname;
		  });
	  };
	  
	  }]);
