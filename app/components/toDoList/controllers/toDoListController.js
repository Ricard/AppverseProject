'use strict';
var app = angular.module('toDoModule');
app.controller('toDoListController', ['tdlist','toDoResource',
    function( tdlist,toDoResource) {
        
        // Creating Personalized Scope
        var vm = this;
       vm.orderBy = "urgency";
       vm.showCompleted = false;
       
        // Fetching All elements from API Rest
        tdlist.$promise.then(function(data) {
            vm.list = data.data;
            console.log("resolving promise:", vm.list);
        });

        // Mark Elements Completed
        vm.setCompleted = function(todo){
            todo.completed = true;
            console.log(todo);
            vm.updateTodo = new toDoResource(todo);
            vm.updateTodo.$update();
        };


        // Delete Completeds
        vm.deleteCompleteds = function(){
            for(var todo in vm.list){
                console.log("todo Element:", todo);
                console.log("vmList todo:", vm.list[todo]);
                if(vm.list[todo].completed){
                    vm.deleteTodo = new toDoResource(vm.list[todo]);
                    vm.deleteTodo.$delete();
                    console.log("deleted Todo:", todo, vm.list[todo]);
                }
            }
        }

        



       


        console.log("Controller with value: ", vm.list);

    }
]);