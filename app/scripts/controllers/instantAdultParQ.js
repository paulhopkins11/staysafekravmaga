'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:AdultParQCtrl
 * @description
 * # AdultParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('InstantAdultParQCtrl', ['$scope', '$routeParams', '$location', 'ParQService', 'UploadService','ConfigurationService', 
  	function ($scope, $routeParams, $location, ParQService, UploadService, ConfigurationService) {
	  $scope.reset = function() {
		  return {firstname:'',
				  surname:'',
				  date: new Date(),
				  address: '',
				  postcode: '',
				  homephone: '',
				  mobilephone: '',
				  email: '',
				  dob: '',
				  emergencycontact: '',
				  emergencynumber: '',
				  howhear: '',
				  q1_heart: false,
				  q2_chest: false,
				  q3_chestmonth: false,
				  q4_dizzy: false,
				  q5_bone: false,
				  q6_blood: false,
				  q7_supervision: false,
				  q8_pregnant: false,
				  q9_additional: '',
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