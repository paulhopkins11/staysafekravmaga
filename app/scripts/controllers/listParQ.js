'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:ListParQCtrl
 * @description
 * # ListParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('ListParQCtrl', ['ParQService', function (ParQService) {
	  this.parqs = ParQService.getParQs();
	  
	  
	  
	  }]);
