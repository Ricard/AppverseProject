'use strict';

angular.module('App.Controllers')

.directive('purchaseList', 
	function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'components/purchase/purchase-list.html'
	    };
	}
);