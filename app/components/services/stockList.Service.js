'use strict';

angular.module('App.Services')
	.service('stockListService', function(){
        $http.get('components/BBDDjson/BBDDstocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log('data llegida', $scope.stocks);
    	});
    });