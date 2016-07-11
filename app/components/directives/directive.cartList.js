'use strict';

angular.module('App.Controllers')

.directive('cartList', 
	function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'components/cart/cart-list.html'
	    };
	}
);