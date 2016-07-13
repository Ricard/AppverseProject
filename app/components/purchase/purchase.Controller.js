'use strict';

angular.module('App.Controllers')

.controller('purchaseController',
    function ($log, $scope, $http, cartListService, $translate, tmhDynamicLocale) {
        $log.debug('purchaseController loading');

        $scope.greeting = 'Welcome';
        
        $scope.getStock = function(){
            self.list = stockListService.getList();
            console.log('StockList Cargado');
        };
        //$http.get('components/BBDDjson/BBDDstocks.json').then(function(data){
        //	$scope.stocks = data.data;
        //	console.log('Stock Cargado', $scope.stocks);
    	//});
        
        $scope.addToCart = function(stock){
            cartListService.addToList(stock);
            console.log('Hem afegit el producte ', stock);
        };
    }
);