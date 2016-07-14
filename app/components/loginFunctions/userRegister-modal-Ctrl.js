'use strict';

var app = angular.module('loginModule');

app.controller('userRegisterModalCtrl',
    function($scope, $uibModalInstance, AuthService, $state) {
        var self = this;
        self.userRegister = {};
        $scope.username = {};
        
        
        
       self.socialProviders = AuthService.getSocialProviders();
        
        // Oks To modal and do Save or Update
        $scope.ok = function() {
            $uibModalInstance.close(self.userRegister);
        };
        // Close Modal and Dismiss changes
        $scope.cancel = function() {
            
            $uibModalInstance.dismiss('cancel');
            
        };
        
        self.socialSignUp = function (provider) {
            AuthService.socialSignUp(provider.name)
            .then($uibModalInstance.dismiss('social'));
               
                      
                    
        };
    });