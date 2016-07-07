'use strict';

angular.module('App.Controllers')

.controller('purchaseController',
    function ($log, $scope, $http, listService) {
        $log.debug('purchaseController loading');

        $scope.greeting = 'Welcome';

        $http.get('components/stock/stocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
    	});
        $scope.addToCart = function(stock){
            listService.addToList(stock);
            console.log('Hem afegit el producte ', stock);
        };
	}
);
