'use strict';
// API FOR READ RSS FEED AT RRRS BRANCH
   google.load('feeds', '1');

angular.module('RssFeedModule', [
    'backand',

    
    ])

.config(function(BackandProvider){
    BackandProvider.setAppName('aedesigndashboard');
    BackandProvider.setSignUpToken('16540fad-8deb-4cd1-a15c-24f3e88e1727');
    BackandProvider.setAnonymousToken('922d5c01-b0b7-45cf-a4a6-ce988b3f3321');
});