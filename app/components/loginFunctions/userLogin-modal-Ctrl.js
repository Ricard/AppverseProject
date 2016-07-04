'use strict';

var app = angular.module('RssFeedModule');

app.controller('userLoginModalCtrl',
    function($scope, $uibModalInstance, AuthService, $state ) {
    
        $scope.userLogin = {};
        var self = this;
        self.socialProviders = AuthService.getSocialProviders();
        
        // Oks To modal and do Save or Update
        $scope.ok = function() {
            $uibModalInstance.close($scope.userLogin);
        };
        // Close Modal and Dismiss changes
        $scope.cancel = function() {
             console.log('cancel del modal en seu ctrl');
            $uibModalInstance.dismiss('cancel');
           
     //  $state.go('home');
        };
        
        self.socialSignIn = function (provider) {
           
                AuthService.socialSignIn(provider.name)
                    .then(function(){
                      //  $scope.cancel();
                      $uibModalInstance.dismiss('social');
                        $state.go('rssFeed');
                    });
        };
        
    });