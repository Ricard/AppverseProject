(function(){
   'use strict';
var app = angular.module('loginModule');

app.service('userService', userService); 
    function userService($q){
        var self = this;
        
        self.loggedUser={};
        
        self.getUser = function(){
           self.updateUser();
            return self.loggedUser;
        }
        
        self.getUserId = function(){
            self.updateUser();
            self.userId = self.loggedUser.userId;
            return self.userId;
        }
        
        self.updateUser = function(){
            self.loggedUser = JSON.parse(localStorage.BACKANDuser);
        }
        
        self.resolveUser = function(){
            var d = $q.defer();
            self.updateUser();
            d.resolve(self.loggedUser);
            return d.promise;
        };
    };
    
}());
