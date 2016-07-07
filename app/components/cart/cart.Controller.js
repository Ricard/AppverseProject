'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope, $http, listService) {
        $log.debug('cartController loading');
        var self = this;
        $scope.empty= false;
        self.greeting = 'Welcome';

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
            console.log('Lista Borrada');
        };
        

	}
);