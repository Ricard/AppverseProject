'use strict';
var app = angular.module('toDoModule');

app.directive('tdElementPreview', function(){
    return {
        restirict: 'E',
        templateUrl:'components/toDoList/directives/element-directive.html'
    };
});