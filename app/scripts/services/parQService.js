'use strict';

angular.module('staySafeApp').factory(
		'ParQService',
		[
				'$log',
				'localStorageService',
				function($log, $localStorage) {
					var parQService = {};

					if (!$localStorage.get('parqs')) {
						$localStorage.set('parqs', []);
					}

					parQService.addParQ = function(newParQ) {
						var parqs = $localStorage.get('parqs');
						parqs.push(newParQ);
						parQService.saveParQs(parqs);
					};
					parQService.saveParQs = function(parqs) {
						$localStorage.set('parqs', parqs);
					};

					parQService.getParQs = function() {
						return $localStorage.get('parqs');
					};
					parQService.getParQ = function(firstname, surname) {
						var parqs = parQService.getParQs();
						for (var index = 0; index < parqs.length; ++index) {
						    if (parqs[index].firstname==firstname && parqs[index].surname==surname) {
						    	return parqs[index];
						    }
						}
						return null;
					};
					parQService.updateParQ = function(parq) {
						var parqs = parQService.getParQs();
						for (var index = 0; index < parqs.length; ++index) {
							if (parqs[index].firstname==parq.firstname && parqs[index].surname==parq.surname) {
								parqs.splice(index, 1);
								parqs.push(parq);
								parQService.saveParQs(parqs)
								return;
							}
						}
					};

					return parQService;
				} ]);