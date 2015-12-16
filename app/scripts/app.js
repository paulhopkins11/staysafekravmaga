'use strict';

/**
 * @ngdoc overview
 * @name staySafeApp
 * @description
 * # staySafeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('staySafeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listParQs', {
    	  templateUrl: 'views/listParQs.html',
    	  controller: 'ListParQCtrl',
    	  controllerAs: 'listParQ'
      })
      .when('/adultParQ/:firstname/:surname', {
    	  templateUrl: 'views/adultParQ.html',
    	  controller: 'AdultParQCtrl',
    	  controllerAs: 'adultParQ'
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
      .when('/config', {
    	  templateUrl: 'views/configuration.html',
    	  controller: 'ConfigurationCtrl',
    	  controllerAs: 'configuration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
});