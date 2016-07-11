'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope, $http, listService) {
        $log.debug('cartController loading');
        var self = this;
        $scope.empty= false;
        self.greeting = 'Welcome';
        self.totalPrice=0;
        $scope.getCart = function(){
            self.list = listService.getList();
            console.log('Lista Cargada');
        };
        $scope.getCart();
        if(self.list >= 0){
            $scope.empty= true;
        } else{
            $scope.empty= false;
        };
        for(self.i=0; self.i<self.list.length; self.i++){
            self.totalPrice= self.totalPrice + self.list[self.i].price;
        };
        
        $scope.removePurchase = function(id){
            console.log(':D Prueba!')
        };
        
        $scope.removeCart = function(){
            self.list = listService.removeList();
            if(self.list >= 0){
                $scope.empty= true;
            } else{
                $scope.empty= false;
            };
            self.totalPrice=0;
            console.log('Lista Borrada');
        };
        
        $scope.confirmCart = function () {
            return confirm('Are you sure you want to delete cart ?');
        };
	}
);