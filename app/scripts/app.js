'use strict';

/**
 * @ngdoc overview
 * @name staySafeApp
 * @description
 * # staySafeApp
 *
 * Main module of the application.
 */
angular
  .module('staySafeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/listParQs', {
        templateUrl: 'views/listParQs.html',
        controller: 'ListParQCtrl',
        controllerAs: 'listParQ'
      })
      .when('/adultParQ', {
    	  templateUrl: 'views/adultParQ.html',
    	  controller: 'AdultParQCtrl',
    	  controllerAs: 'adultParQ'
      })
      .when('/kidsParQ', {
    	  templateUrl: 'views/kidsParQ.html',
    	  controller: 'KidsParQCtrl',
    	  controllerAs: 'kidsParQ'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
