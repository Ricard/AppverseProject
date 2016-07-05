'use strict';

angular.module('App.Controllers')

.controller('purchaseController',
    function ($log, $scope) {
        $log.debug('purchaseController loading');

        $scope.greeting = 'Welcome';
    });
