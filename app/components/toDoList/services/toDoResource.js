'use strict';

var app = angular.module('toDoModule');

app.factory('toDoResource',['$resource','Backand', function($resource, Backand){
   
   
    return $resource(Backand.getApiUrl() + '/1/objects/toDoList/:id',{ id: '@id'},{
        update:{
            method: 'PUT'
        }
    });
}]);

/*
* MODEL FOR ToDo Resource.
*
*Object Definition:
*API REST: http://backand.com ; App DashBoard.
*
*Collection: toDoList
*Parameters: JSON Object
*
*title: String,
*description: text,
*category: String,
*urgency: String,
*dueDate: Date,
*addedOn: Date,
*
*
*/