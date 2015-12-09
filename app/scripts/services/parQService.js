angular.module('staySafeApp').factory("ParQService",
		[ "$log", function($log) {

	this.parqs = [];

	function addParQ(newParQ) {
		this.parqs.push(newParQ)
	}

	function getParQs() {
		return this.parqs;
	}

	// expose a public API
	return {
		addParQ : addParQ,
		getParQs : getParQs
	};
}]);