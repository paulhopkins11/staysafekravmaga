'use strict';

angular.module('staySafeApp').factory('ConfigurationService', [ '$log', 'localStorageService', function($log, $localStorage) {
	var configurationService = {};

	var configuration = $localStorage.get('configuration');
	if (!configuration) {
		$localStorage.set('configuration',{email:'team@staysafekravmaga.com',
			  name:'',
			  phone:'',
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