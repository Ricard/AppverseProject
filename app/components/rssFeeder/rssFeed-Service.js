'use strict';

var app = angular.module('RssFeedModule');

app.service('rssFeedSrv', function($q, $rootScope){
   
        this.getFeed = function(url){
            var d = $q.defer();
            var feed = new google.feeds.Feed(url);
            feed.setNumEntries(10);
            feed.load(function(result){
                $rootScope.$apply(d.resolve(result));
            });
           // console.log("promise service", d.promise);
            return d.promise;
            
        }
    
});

