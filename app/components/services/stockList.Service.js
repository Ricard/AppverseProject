'use strict';

angular.module('App.Services')
	.service('stockListService', function(){
        this.getstock= function(){
        	this.get('components/stock/stocks.json').then(function(data){
        	this.stocks = [];
        	this.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
        });
    	}
    });