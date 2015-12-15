'use strict';

angular.module('staySafeApp').factory('UploadService', [ '$log', '$http', 'ParQService', 'ConfigurationService', function($log, $http, ParQService, ConfigurationService) {
	var uploadService = {};

	uploadService.uploadParQ = function(newParQ) {
		var settings = ConfigurationService.getConfiguration();
		var url = 'http://staySafeKravMaga.com/parq/saveParQ.php';
		var request = {
				'settings': settings,
				'parq': newParQ
				};

		$http
				.post(url, request)
//						, {
//				    headers: {'Authorization': 'Basic cGhvcGtpbnM6cGF1bHNwYXNzOTk='}
//				})
				.success(
						function(data, status, headers,
								config) {
							$log.info('Upload successful');
							$log.info(data);
							// On success
//							ParQService.removeParQ(newParQ);
						})
				.error(
						function(data, status, headers,
								config) {
							$log.info('Upload failed');
							$log.info(data);
//							$scope.data = data
//									|| "Request failed";
//							$scope.status = status;
						});

	};

	return uploadService;
} ]);