'use strict';

angular.module('staySafeApp').factory('ConfigurationService', [ '$log', 'localStorageService', function($log, $localStorage) {
	var configurationService = {};

	if (!$localStorage.get('configuration')) {
		$localStorage.set('configuration',{
				email:'paul@staysafekravmaga.com',
				name:'Paul Hopkins',
				phone:'07982 677717',
				classlocation:''});
	}

	configurationService.setConfiguration = function(configuration) {
		$localStorage.set('configuration', configuration);
	};
	configurationService.removeConfiguration = function() {
		$localStorage.remove('configuration');
	};

	configurationService.getConfiguration = function() {
		return $localStorage.get('configuration');
	};

	return configurationService;
} ]);