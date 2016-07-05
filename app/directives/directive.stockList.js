'use strict';

angular.module('App.Controllers')

.directive('stockList', 
	function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'components/stock/stock-list.html'
	    };
	}
);