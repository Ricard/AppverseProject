'use strict';
angular.module('loginModule')
.controller('loginController', function($scope, $uibModal, AuthService, $state ){
   
   var self = this;

        self.appName = AuthService.appName;
        self.appNameExists = !!self.appName;
        self.error = $state.params.error;
        self.socialProviders = AuthService.getSocialProviders();
        self.userLoggedIn = false;
        self.currentUser = AuthService.currentUser;
        if(self.currentUser.name){
            self.userLoggedIn = true;
        }
       

        // SignUp Modal
        $scope.userRegister = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'userRegisterModalCtrl',
                templateUrl: 'components/loginFunctions/registerTemplate.html',
            });
            modalInstance.result.then(function(user) {
            // console.log('Usuari del Login', user);
            // self.signIn(user);
             
            });
        }; 
        
        
        // From AuthService to LogOut Current User
        self.userLogout = function () {
            AuthService.logout();
            self.currentUser = {};
            self.userLoggedIn = false;
         
            $state.go('home');
        };
        console.log('control de usuario', self.userLoggedIn);
        
        
});

