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
        controllerAs: 'main',
        activeTab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activeTab: 'about'
      })
      .when('/listParQs', {
    	  templateUrl: 'views/listParQs.html',
    	  controller: 'ListParQCtrl',
    	  controllerAs: 'listParQ',
          activeTab: 'listParQ'
      })
      .when('/adultParQ/:firstname/:surname', {
    	  templateUrl: 'views/adultParQ.html',
    	  controller: 'AdultParQCtrl',
    	  controllerAs: 'adultParQ',
          activeTab: 'adultParQ'
      })
      .when('/adultParQ', {
        templateUrl: 'views/adultParQ.html',
        controller: 'AdultParQCtrl',
        controllerAs: 'adultParQ',
          activeTab: 'adultParQ'
      })
      .when('/instantAdultParQ', {
        templateUrl: 'views/instantAdultParQ.html',
        controller: 'InstantAdultParQCtrl',
        controllerAs: 'adultParQ',
          activeTab: 'adultParQ'
      })
      .when('/kidsParQ/:firstname/:surname', {
    	  templateUrl: 'views/kidsParQ.html',
    	  controller: 'KidsParQCtrl',
    	  controllerAs: 'kidsParQ',
          activeTab: 'kidsParQ'
      })
      .when('/kidsParQ', {
        templateUrl: 'views/kidsParQ.html',
        controller: 'KidsParQCtrl',
        controllerAs: 'kidsParQ',
          activeTab: 'kidsParQ'
      })
      .when('/instantKidsParQ', {
        templateUrl: 'views/instantKidsParQ.html',
        controller: 'InstantKidsParQCtrl',
        controllerAs: 'kidsParQ',
          activeTab: 'kidsParQ'
      })
      .when('/config', {
    	  templateUrl: 'views/configuration.html',
    	  controller: 'ConfigurationCtrl',
    	  controllerAs: 'configuration',
          activeTab: 'configuration'
      })
    .otherwise({
    	redirectTo: '/'
    });
  })
  .directive('showErrors', function() {
	    return {
	        restrict: 'A',
	        require:  '^form',
	        link: function (scope, el, attrs, formCtrl) {
	          // find the text box element, which has the 'name' attribute
	          var inputEl   = el[0].querySelector("[name]");
	          // convert the native text box element to an angular element
	          var inputNgEl = angular.element(inputEl);
	          // get the name on the text box so we know the property to check
	          // on the form controller
	          var inputName = inputNgEl.attr('name');

	          // only apply the has-error class after the user leaves the text box
	          inputNgEl.bind('blur', function() {
	            el.toggleClass('has-error', formCtrl[inputName].$invalid);
	            //el.toggleClass('has-success', formCtrl[inputName].$valid);
	          });
	        }
	      };
	    });

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
});