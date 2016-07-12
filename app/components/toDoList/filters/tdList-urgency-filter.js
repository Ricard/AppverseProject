(function () {
    'use strict'; 
var app = angular.module('toDoModule');

app.filter('tdLUrgencyFilter',function(){
    return function(input){
        switch(input){
            case '1':
                return 'High';
            case '2':
                return 'Medium';
            case '3':
                return 'Low';
        }
    };
});
} ());
