'use strict';

angular.module('App.Controllers')

.controller('RestNgRepeatController',
    function ($scope, $http, Restangular, $uibModal, $log) {
        $log.debug('RestNgRepeatController');

        $scope.closeAlert = function (index) {
            $scope.stocksErrors.splice(index, 1);
        };

        $scope.confirmStock = function (stock) {
            return confirm('Are you sure you want to delete stock ' + stock.name + ' ?');
        };
        $http.get('components/BBDDjson/BBDDstocks.json').then(function(data){
        $scope.stocks = data.data;
        console.log('data llegida', $scope.stocks);
    	});
    }
);