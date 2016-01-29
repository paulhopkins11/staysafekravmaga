'use strict';

/**
 * @ngdoc function
 * @name staySafeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the staySafeApp
 */
angular.module('staySafeApp')
.controller('MainCtrl', ['$scope', '$route', function ($scope, $route) {
	$scope.$route = $route;
  }]);
