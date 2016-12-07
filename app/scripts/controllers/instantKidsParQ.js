'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:KidsParQCtrl
 * @description
 * # KidsParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
.controller('InstantKidsParQCtrl', ['$scope', '$routeParams', '$location', 'ParQService', 'UploadService','ConfigurationService', 
	function ($scope, $routeParams, $location, ParQService, UploadService, ConfigurationService) {
	  $scope.reset = function() {
		  return {kid: true,
			  	  firstname: '',
				  surname: '',
				  date: new Date(),
				  parent_firstname: '',
				  parent_surname:'',
				  address: '',
				  postcode: '',
				  homephone: '',
				  mobilephone: '',
				  email: '',
				  dob: '',
				  emergencycontact: '',
				  emergencynumber: '',
				  howhear: '',
				  q1_k_blood: false,
				  q2_k_cholesterol: false,
				  q3_k_diabetes: false,
				  q4_k_chest: false,
				  q5_k_epilepsy: false,
				  q6_k_dizzy: false,
				  q7_k_arthritis: false,
				  q8_k_asthma: false,
				  q9_k_sustained: false,
				  q10_k_allergies: false,
				  q11_k_medication: false,
				  q12_k_exercise: false,
				  q13_k_anyother: false,
				  q14_k_medication: false,
				  q15_k_fulldetails: '',
				  q16_k_additional: '',
				  secret: ''
				  };		  
	  };
	  $scope.settings = ConfigurationService.getConfiguration();
	  $scope.firstname = $routeParams.firstname;
	  $scope.surname = $routeParams.surname;
	  if ($scope.firstname && $scope.surname) {
		  $scope.parq = ParQService.getParQ($scope.firstname, $scope.surname);
	  }
	  else {
		  $scope.parq = $scope.reset();
	  }
	  $scope.clearUpload = function() {
		  $scope.uploadFailed = null;
		  $scope.uploadSuccess = null;		  
	  };
	  $scope.uploading = false;
	  $scope.clearUpload();
	  $scope.uploadParQ = function() {
  	  	var parq = $scope.parq;
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