'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:ConfigurationCtrl
 * @description
 * # ConfigurationCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
  .controller('ConfigurationCtrl', ['$log','$scope','ConfigurationService', function ($log, $scope, ConfigurationService) {
	  $scope.reset = function() {
		  ConfigurationService.removeConfiguration();	  
		  $scope.settings = ConfigurationService.getConfiguration();
	  };
	  $scope.settings = ConfigurationService.getConfiguration();
	  $scope.save = function() {
		  ConfigurationService.setConfiguration($scope.settings);
	  };
  }]);