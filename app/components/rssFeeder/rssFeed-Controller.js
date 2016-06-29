'use strict';

var app = angular.module('RssFeedModule');


app.controller('rssFeedCtrl',
    function(rssFeedSrv, $uibModal, FeedResource) {
    
        var vm = this;
        //Control for edit Feeders
        vm.btnSelectText = 'Select Actives';
        vm.NotselectFeeder = true;
        // List of Entry Objects o Feeds
        vm.data = [];
        // List of Feeds
        vm.feedsLst = [];

        // INITIALIZE RSS FEEDERS
        vm.initialize = function(){
            vm.feedsLst = [];
            vm.data = [];
            vm.populateFeeder(); 
        };
        
        //GET LIST OF FEEDERS
        vm.populateFeeder = function() {
            FeedResource.get().$promise.then(function(data) {
                vm.feedsLst = data.data;
                vm.populateData();
            });
        };
        // Recover List of Feeds
        vm.populateData = function() {
            for (var i = 0; i < vm.feedsLst.length; i++) {
                if(vm.feedsLst[i].feedActive){
                    rssFeedSrv.getFeed(vm.feedsLst[i].feedUrl)
                    .then(function(result) {
                        console.log('Feeder llegit', result);
                        for (var i = 0; i < result.feed.entries.length; i++) {
                            var entry = result.feed.entries[i];
                            entry.feeder = result.feed.title;
                            entry.publishedDate = new Date(entry.publishedDate);
                            vm.data.push(entry);
                        }
                        console.log('Totes les entrades', vm.data);
                    });
                }
            }
            console.log('Tots els Feeders', vm.feedsLst);
            console.log('Totes les entrades', vm.data);
        };
        //UpdateActiveFeed
        vm.checkActive = function (feed){
            feed.feedActive = !feed.feedActive;
            console.log('feed a modificar', feed);
            vm.modFeed = new FeedResource(feed);
            //vm.modFeed.$save();    
            vm.modFeed.$update();
             vm.data = [];
             vm.populateData();  
        };
        
        // Active Select Feeders
        vm.canSelectFeeder = function(){
            if(vm.NotselectFeeder){
                vm.NotselectFeeder = false;
                vm.btnSelectText = 'Save';    
            }else{
                vm.NotselectFeeder = true;
                vm.btnSelectText = 'Select Actives';
                vm.initialize();
            }
        };
        // Login Modal
        vm.userLogin = function() {

            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'userLoginModalCtrl',
                templateUrl: 'components/loginFunctions/loginTemplate.html',
            });
            modalInstance.result.then(function(feed) {
             // FALTA LA LOGICA   
             
            });
        };
                
        // Add New Feeder
        vm.addFeeder = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'rssFeedModalCtrl',
                templateUrl: 'components/rssFeeder/feedAddTemplate.html',
                resolve:{
                    feeder: undefined
                }
            });
            modalInstance.result.then(function(feed) {
                //vm.feedsLst.push(feed);
                vm.newFeeder = new FeedResource(feed);
                vm.newFeeder.$save(function(error) {
                    console.log('Error al guardar:', error);
                });
                vm.initialize();
            });
        };
        
        //Modify Feeder Attrs
        vm.modFeeder = function(feeder) {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'rssFeedModalCtrl',
                templateUrl: 'components/rssFeeder/feedAddTemplate.html',
                resolve:{
                    feeder: feeder
                }                 
            });
            modalInstance.result.then(function(feed) {
                //vm.feedsLst.push(feed);
                vm.newFeeder = new FeedResource(feed);
                vm.newFeeder.$update();
                vm.initialize();
            });
        };
        
        vm.initialize();
    });