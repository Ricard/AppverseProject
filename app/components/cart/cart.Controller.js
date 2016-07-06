'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope, $http, listService) {
        $log.debug('cartController loading');

        $scope.greeting = 'Welcome';

        $http.get('components/stock/stocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
    	});
        $scope.getCart = function(id){
            var list = listService.getList();
            console.log(list)
        };
	}
);