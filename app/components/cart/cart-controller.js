'use strict';

angular.module('App.Controllers')

.controller('cartController',
    function ($log, $scope) {
        $log.debug('cartController loading');

        $scope.greeting = 'Welcome';
    }
).directive("purchaseList", function() {
    return {
      restrict: 'E',
      templateUrl: "components/stock/purchase-list.html"
    };
});
