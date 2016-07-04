'use strict';
angular.module('RssFeedModule')
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
       
        // Login Modal
        // $scope.userLogin = function() {

        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         controller: 'userLoginModalCtrl as login',
        //         templateUrl: 'components/loginFunctions/loginTemplate.html',
        //         resolve:{
        //             socialProviders: self.socialProviders
        //         }
        //     });
        //     modalInstance.result.then(function(user) {
        //     // console.log('Usuari del Login', user);
        //      self.signIn(user);
             
        //     });
        //     // From AuthService to SignIn user to App
        //     self.signIn = function (userlogin) {
        //     AuthService.signIn(userlogin.username, userlogin.password, self.appName)
        //         .then(
        //         function () {
        //             self.currentUser = AuthService.currenUser;
        //             self.userLoggedIn = true;
        //             console.log('User as Logged: ', self.currentUser);
        //             $state.go('rssFeed');
        //         },
        //         showError
        //     ).catch(function(err){
        //         console.log('error de login', err);
        //     })
        // };
        // // Managing Possible Errors from Service
        // function showError(error) {
        //     self.error = error && error.data || error.error_description || 'Unknown error from server';
        // };
        // };
        
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

