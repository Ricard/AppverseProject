'use strict';

var app = angular.module('RssFeedModule');

app.controller('userLoginModalCtrl',
    function($scope, $uibModalInstance) {
       

      
        
        
        // Oks To modal and do Save or Update
        $scope.ok = function() {
            $uibModalInstance.close($scope.feed);
        };
        // Close Modal and Dismiss changes
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });