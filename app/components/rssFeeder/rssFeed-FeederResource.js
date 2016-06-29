'use strict';

var app = angular.module('RssFeedModule');

app.factory('FeedResource',['Backand','$resource', function(Backand,$resource){
   
   
    return $resource(Backand.getApiUrl() + '/1/objects/rssFeeder/:id',{ id: '@id'},{
        update:{
            method: 'PUT'
        }
    });
}]);

/*
* MODEL FOR rssFeeder Resource.
*
*Object Definition:
*API REST: http://backand.com ; App DashBoard.
*
*Collection: rssFeeder
*Parameters: JSON Object
*
*feedName: String,
*feedUrl: String,
*feedDesc: text,
*feedActive: Boolean,
*userID: String,
*
*
*
*/