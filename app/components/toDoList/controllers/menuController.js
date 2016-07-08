'use strict';
var app = angular.module('toDoModule');

app.controller('menuController',['$route', function($route){
    var vm = this;
    vm.currentTab = function(tab){
        
        return $route.current.menuoption === tab;
    }
}]);