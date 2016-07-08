
'use strict';
var app = angular.module('toDoModule');

app.filter('tdLCompletedFilter', function() {
   return function( items, condition) {
    var filtered = [];

    if(condition){
      return items;
    }

    angular.forEach(items, function(item) {          
       if(condition === item.completed){
         filtered.push(item);
       }
    });

    return filtered;
  };
});



// Condition es todo.completed = true && show.Completed
// si show Completed = false nomes es veuen