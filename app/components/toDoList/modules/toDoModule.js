(function () {
    'use strict'; 
angular.module('toDoModule',[])

.config(function(BackandProvider){
    BackandProvider.setAppName('aedesigndashboard');
    BackandProvider.setSignUpToken('f990375e-6128-4f10-9211-a88d22b7800f');
    BackandProvider.setAnonymousToken('922d5c01-b0b7-45cf-a4a6-ce988b3f3321');
});
} ());

