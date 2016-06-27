'use strict';

var app = angular.module('RssFeedModule');

app.service('rssFeedSrv', function($q, $rootScope){
   
        this.getFeed = function(url){
            // var vm = this;
            //  vm.readed = [];
            // var feed = new google.feeds.Feed(url);
            // feed.setNumEntries(10);
            // feed.load(function(result){
            //     for (var i = 0; i < result.feed.entries.length; i++) {
            //         var entry = result.feed.entries[i];
            //         console.log("Entries en Service", entry);
            //         vm.readed.push(entry);
                    
            //     };
            // });
            // console.log("tots", vm.readed);
            // return vm.readed;
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

