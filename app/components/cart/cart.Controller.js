'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope, $http, listService) {
        $log.debug('cartController loading');
        var self = this;
        self.greeting = 'Welcome';

        $scope.getCart = function(){
            self.list = listService.getList();
            console.log('Lista Cargada');
        };

        $scope.removePurchase = function(id){
            console.log(':D Prueba!')
        };

        $scope.removeCart = function(){
            self.list = listService.removeList();
            console.log('Lista Borrada');
        };
        
        $scope.getCart();
	}
);