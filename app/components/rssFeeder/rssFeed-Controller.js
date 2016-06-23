'use strict';

var app = angular.module('RssFeedModule');


app.controller('rssFeedCtrl',
    function(rssFeedSrv, $uibModal, feedResource) {
 
        var vm = this;
        // List of Entry Objects o Feeds
        vm.data = [];
        // List of Feeds
        vm.feedsLst = [];

        // INITIALIZE RSS FEEDERS
        vm.initialize = function(){
            vm.feedsLst = [];
            vm.data = [];
            vm.populateFeeder();
            vm.populateData();  
        };
        //GET LIST OF FEEDERS
        vm.populateFeeder = function() {
            feedResource.get().$promise.then(function(data) {
                vm.feedsLst = data.data;
                vm.populateData();
                console.log("llista from backand", vm.feedsLst);
            });
        };
        // Recover List of Feeds
        vm.populateData = function() {
            for (var i = 0; i < vm.feedsLst.length; i++) {
                rssFeedSrv.getFeed(vm.feedsLst[i].feedUrl)
                    .then(function(result) {
                        console.log("in controller", result);
                        for (var i = 0; i < result.feed.entries.length; i++) {
                            var entry = result.feed.entries[i];
                            entry.feeder = result.feed.title;
                            entry.publishedDate = new Date(entry.publishedDate);
                            vm.data.push(entry);
                        }
                        console.log("data posterior al resolve", vm.data);
                    });
            };
        };
        
                
        // Add New Feeder
        vm.addFeeder = function() {
            // Create a Feeder Object
            //vm.feedLst.push(feeder);
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'rssFeedModalCtrl',
                templateUrl: 'components/rssFeeder/feedAddTemplate.html'
            });
            modalInstance.result.then(function(feed) {
                //vm.feedsLst.push(feed);
                vm.newFeeder = new feedResource(feed);
                vm.newFeeder.$save(function(error) {
                    console.log("Error al guardar:", error);
                });
                vm.initialize();
            });
        };

        
        vm.newFeed = new feedResource();
        vm.initialize();
    });