'use strict';

angular.module('staySafeApp').factory('ParQService', [ '$log', 'localStorageService', function($log, $localStorage) {
	var parQService = {};

	var parqs = $localStorage.get('parqs');
	if (!parqs) {
		$localStorage.set('parqs',[]);
	}

	parQService.addParQ = function(newParQ) {
		var parqs = $localStorage.get('parqs');
		parqs.push(newParQ);
		$localStorage.set('parqs', parqs);
	};
	parQService.removeParQ = function(parQ) {
		var parqs = $localStorage.get('parqs');
		var index = parqs.indexOf(parQ);
		if (index > -1) {
			$localStorage.get('parqs').splice(index, 1);
		}
		$localStorage.set('parqs', parqs);
	};

	parQService.getParQs = function() {
		$log.log('Storage type is ' + $localStorage.getStorageType());
		return $localStorage.get('parqs');
	};

	return parQService;
} ]);