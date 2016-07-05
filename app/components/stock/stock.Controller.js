'use strict';

angular.module('App.Controllers')

.controller('stockController',
    function ($log, $scope, $http) {
        $log.debug('stockController loading');

        $scope.greeting = 'Welcome';

        $http.get('components/stock/stocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
    	});
        $scope.addToCart = function(id){
            console.log('Hem afegit el producte ', id);
        };
	}
);