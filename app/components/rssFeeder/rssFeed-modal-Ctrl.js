'use strict';

var app = angular.module('RssFeedModule');

app.controller('rssFeedModalCtrl',
    function($scope, $uibModalInstance, feeder, FeedResource, rssFeedSrv) {
       
        $scope.feedNotValid = true;
        $scope.textTitle = 'Add New Feeder: ';
        
        // Check if is a New or Update Feeder
        if(feeder){
            $scope.feedNotValid = false;
            $scope.feed = feeder;
            $scope.textTitle = 'Editar Feeder: ';
        }else{
            $scope.feed = {
                feedName: '',
                feedUrl: ''
            };
    }
        // Check if a New Feeder is Valid before to add them
        $scope.checkfeed = function(){
            rssFeedSrv.getFeed($scope.feed.feedUrl)
            .then(function(data){
                    $scope.feedChecked = data.feed;
                    console.log('checking feeder', $scope.feedChecked);
                  if($scope.feedChecked.entries.length >0){
                     $scope.feedNotValid = false;
                        $scope.feed.feedName = $scope.feedChecked.title;
                        $scope.feed.feedDesc = $scope.feedChecked.description;
                        $scope.feed.feedLink = $scope.feedChecked.link;
                        $scope.feed.feedActive = true;
                         
                     }else{
                         $scope.feedNotValid = true;
                         $scope.feed = {};
                     }
            });
        };
        // Deletes Actual Feeder from list and BD
        $scope.deletefeed = function(){
            $scope.feederdel = new FeedResource(feeder);
            $scope.feederdel.$delete();
            $scope.cancel();
        };
        // Oks To modal and do Save or Update
        $scope.ok = function() {
            $uibModalInstance.close($scope.feed);
        };
        // Close Modal and Dismiss changes
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });