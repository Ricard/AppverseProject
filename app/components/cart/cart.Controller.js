'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope, $http, listService) {
        $log.debug('cartController loading');
        var self = this;
        self.greeting = 'Welcome';

        $http.get('components/stock/stocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
    	});
        $scope.getCart = function(){
            self.list = listService.getList();
            console.log(self.list);
        };
        $scope.getCart();
	}
);