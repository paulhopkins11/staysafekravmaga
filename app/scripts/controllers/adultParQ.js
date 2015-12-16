'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:AdultParQCtrl
 * @description
 * # AdultParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('AdultParQCtrl', ['$scope', '$routeParams', '$location', 'ParQService', function ($scope, $routeParams, $location, ParQService) {
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
				  q1_heart: '',
				  q2_chest: '',
				  q3_chestmonth: '',
				  q4_dizzy: '',
				  q5_bone: '',
				  q6_blood: '',
				  q7_supervision: '',
				  q8_pregnant: '',
				  q9_additional: '',
				  secret: ''
				  };		  
	  };
	  $scope.firstname = $routeParams.firstname;
	  $scope.surname = $routeParams.surname;
	  if ($scope.firstname && $scope.surname) {
		  $scope.parq = ParQService.getParQ($scope.firstname, $scope.surname);
	  }
	  else {
		  $scope.parq = $scope.reset();
	  }
	  $scope.save = function() {
		  if ($scope.firstname && $scope.surname) {
			  ParQService.updateParQ($scope.parq);
		  }
		  else {
			  ParQService.addParQ($scope.parq);
		  }
		  $location.path( "#/listParQs" );
	  };
  }]);