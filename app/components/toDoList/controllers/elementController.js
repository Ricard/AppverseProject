'use strict';
var app = angular.module('toDoModule');
app.controller('elementController', ['toDoResource', '$stateParams', '$state','$scope',
    function(toDoResource, $stateParams, $state,$scope) {

    var vm = this;

    vm.todo = {};
    console.log("todoElement: ", vm.todo);
    vm.isNew = false;
    vm.disabled = true;
    vm.btnEdit = "Edit";
    vm.btnCancel = "Back";
   

    // SAVE New ToDo Element
    vm.saveNew = function() {
        // Create Date Elements Correctly
        
       // vm.todo.addedOn = new Date();
        //vm.todo.completed = false;
        //vm.todo.dueDate = new Date(vm.todo.dueDate);
        
        vm.newTodo = new toDoResource(vm.todo);
        vm.newTodo.$save();
    };

    //UPDATE ToDo Element
    vm.updateToDo = function(todo) {
        todo.$update();
    };

    //Check if is Save or Update
    vm.saveOrUpdate = function() {

        if (vm.isNew) {
            vm.saveNew();
        } else {
            vm.updateToDo(vm.todo);
        }
        $state.go('toDoList');
    };
    

    // Functions to Control Buttons
    vm.isEditable = function() {
         if (!vm.disabled){vm.saveOrUpdate();};
        console.log("todo post form", vm.todo);
        vm.disabled = !vm.disabled;
        
        if (!vm.disabled) {
            vm.btnEdit = "Save";
            vm.btnCancel = "Cancel";
        } else {
            vm.btnEdit = "Edit";
            vm.btnCancel = "Back";
        }
    };
    // Controls if is New Element or Edit
    if (!$stateParams.id) {
        vm.isNew = true;
        vm.disabled = false;
        vm.btnEdit = "Save";
        vm.btnCancel = "Cancel";
    } else { 
        vm.todo = toDoResource.get({
            id: $stateParams.id
        });
      //  vm.todo.dueDate = Date.parse(vm.todo.dueDate);
       // vm.todo.dueDate.parse('yyyy-MM-dd');
       // vm.todo.dueDate = vm.todo.dueDate.getTime();
      //  vm.todo.addedOn = new Date(vm.todo.addedOn);
      
    }
/////////////////////////////////////////////////////////////
$scope.today = function () {
    $scope.dt = new Date();
};
$scope.today();
$scope.clear = function () {
    $scope.dt = null;
};


$scope.disabled = function (date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
};

$scope.toggleMin = function () {
    $scope.minDate = $scope.minDate ? null : new Date();
};
$scope.toggleMin();

$scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
};

$scope.dateOptions = {
    class: 'datepicker',
    showWeeks: false,
    formatYear: 'yy',
    startingDay: 1
};

$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
$scope.format = $scope.formats[0];

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var afterTomorrow = new Date();
afterTomorrow.setDate(tomorrow.getDate() + 2);
$scope.events = [
    {
        date: tomorrow,
        status: 'full'
                    },
    {
        date: afterTomorrow,
        status: 'partially'
                    }
                ];

$scope.getDayClass = function (date, mode) {
    if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

        for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

            if (dayToCheck === currentDay) {
                return $scope.events[i].status;
            }
        }
    }

    return '';
};

}]);