'use strict';

var app = angular.module('RssFeedModule');

app.directive('rssFeedElement',function(){
    return {
        restrict: 'E',
        templateUrl: 'components/rssFeeder/feedElement.html'
        
    };
});