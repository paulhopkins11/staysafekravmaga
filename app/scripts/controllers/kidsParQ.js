'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:KidsParQCtrl
 * @description
 * # KidsParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
.controller('KidsParQCtrl', ['$scope', '$routeParams', '$location', 'ParQService', function ($scope, $routeParams, $location, ParQService) {
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
/*	  High or Low Blood Pressure
	  Elevated blood cholesterol
	  Diabetes
	  Chest pains brought on by physical exertion
	  Childhood epilepsy
	  Dizziness or fainting
	  A bone, joint or muscular problems with arthritis
	  Asthma or respiratory Problems
	  Any sustained injuries or illness
	  Any allergies
	  Is your child taking any medication
	  Has your doctor ever advised your child to exercise
	  Is there any reason not mentioned above why any type or physical activity may not be suitable for your child 
*/
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
		  $location.path( "/listParQs" );
	  };
}]);