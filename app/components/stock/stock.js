'use strict';

angular.module('App.Controllers')

.controller('stockController',
    function ($log, $scope, $http) {
        $log.debug('stockController loading');

        $scope.greeting = 'Welcome';

        $http.get('components/stock/stocks.json').then(function(data){
        	$scope.stocks = data.data;
        	console.log("data llegida", $scope.stocks);
    	});
        $scope.addToCart = function(id){
            console.log("Hem afegit el producte ", id);
        };
	}
).controller('RestNgRepeatController',
    function ($scope, Restangular, $uibModal, $log) {
        $log.debug('RestNgRepeatController');

        $scope.closeAlert = function (index) {
            $scope.stocksErrors.splice(index, 1);
        };

        $scope.confirmStock = function (stock) {
            return confirm('Are you sure you want to delete stock ' + stock.name + ' ?');
        };
    }
).directive("stockList", function() {
    return {
      restrict: 'E',
      templateUrl: "components/stock/stock-list.html"
    };
});