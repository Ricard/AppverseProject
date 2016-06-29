'use strict';
angular.module('RssFeedModule')
.controller('loginController', function($scope, $uibModal, AuthService ){
   
   var self = this;

        // self.appName = AuthService.appName;
        // self.appNameExists = !!self.appName;
        // self.error = $state.params.error;
        // self.socialProviders = AuthService.getSocialProviders();
        
        // Login Modal
        self.userLogin = function() {

            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'userLoginModalCtrl',
                templateUrl: 'components/loginFunctions/loginTemplate.html',
            });
            modalInstance.result.then(function(feed) {
             // FALTA LA LOGICA   
             
            });
        };
});

