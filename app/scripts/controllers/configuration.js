'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:AdultParQCtrl
 * @description
 * # AdultParQCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('ConfigurationCtrl', ['$scope','ConfigurationService', function ($scope,ConfigurationService) {
	  $scope.reset = function() {
		  ConfigurationService.removeConfiguration();	  
		  $scope.configuration = ConfigurationService.getConfiguration();
	  }
	  $scope.configuration = ConfigurationService.getConfiguration();
	  $scope.save = function() {
		  ConfigurationService.setConfiguration($scope.configuration);
	  }
  }]);