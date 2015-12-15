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
				  date: new Date(),
				  address: '',
				  postcode: '',
				  homephone: '',
				  mobilephone: '',
				  email: 'N@W',
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
	  $scope.parq = $scope.reset();
	  $scope.save = function() {
		  ParQService.addParQ($scope.parq);
	  };
  }]);