'use strict';

var app = angular.module('RssFeedModule');





app.controller('rssFeedModalCtrl',
    function($scope, $uibModalInstance) {

        'use strict';
        $scope.feed = {
            feedName: "",
            feedUrl: ""
        };
      
        $scope.ok = function() {
            $uibModalInstance.close($scope.feed);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });