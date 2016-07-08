'use strict';
var app = angular.module('toDoModule');

app.factory('toDoService', ['$http','Backand', function($http, Backand) {

    var toDoService = {};
    toDoService.todo = {};
    toDoService.list = [];
    toDoService.listback = [];
    
    console.log("list on service before Get: ", toDoService.list);
    
    
    // BACKAND CALL
    toDoService.backq = function() {
        return $http({
            method: 'GET',
            url: Backand.getApiUrl() + '/1/objects/toDoList',
            params: {
                pageSize: 20,
                pageNumber: 1,
                filter: null,
                sort: ''
            }
        }).success(function(data){
            console.log("Backend Resolve: ", data);
            angular.copy(data.data, toDoService.list);
            console.log("list on service after succes: ", toDoService.list);
            return data;
        }).error(function( error){
            console.log("Backend Error: ", error);
        });
    };
    toDoService.backq();
    console.log("list on service : ", toDoService.list);
    return toDoService;
}]);