'use strict';

var app = angular.module('RssFeedModule');

app.controller('rssFeedCtrl', function(rssFeedSrv){
    console.log("Carga correcta del Controlador");
    var vm = this;
    vm.url = "http://feeds.weblogssl.com/genbeta";
    vm.data = [];
    vm.feed = [];
    rssFeedSrv.getFeed(vm.url)
        .then(function(result){
            vm.feed = result.feed;
            
            console.log("in controller", result);
            for (var i = 0; i < result.feed.entries.length; i++){
                var entry = result.feed.entries[i];
                entry.feeder = result.feed.title;
                vm.data.push(entry);
            }
            console.log("data posterior al resolve", vm.data);
        });    
});