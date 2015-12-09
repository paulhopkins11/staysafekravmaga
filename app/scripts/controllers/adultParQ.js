'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:AdultParQCtrl
 * @description
 * # AdultParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('AdultParQCtrl', ['ParQService', function (ParQService) {
	  this.reset = function() {
		  return {firstname:'NEW',
				  surname:'NE',
				  email: 'N@W',
				  dob: '01/02/99' };		  
	  }
	  this.parq = this.reset();
	  this.save = function() {
		  ParQService.addParQ(this.parq);
	  }
  }]);