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