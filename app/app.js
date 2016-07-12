(function() {
    'use strict';

    agGrid.initialiseAgGridWithAngular1(angular);
    angular.module('App.Controllers', []);
    angular.module('appverseprojectApp', [
        'appverse.translate',
        'appverse.rest',
        'appverse.performance',
        'appverse.logging',
        'appverse.cache',
        'ngAnimate',
        'ngResource',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'xeditable',
        'agGrid',
        'appverse.router',
        'App.Controllers',
        'appverse',
        'ngMdIcons',
        'ngCookies',
        'loginModul',
        'angular-loading-bar',
        'RssFeedModule',
        'toDoModule'


    ]).run(function($log, editableOptions, $rootScope, $location, AuthService) {
        $log.debug('testAlphaApp run');
        editableOptions.theme = 'bs3';
        $('#menu-toggle').click(function(e) {
            e.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
        //
        // $rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
        //   console.log('CRIDA DE INTERCEPTOR');
            
        //   AuthService.getCurrentUser().then(function(data){
        //       console.log('data from userdata', data)
        //      //$rootScope.loggedUserId = data.details.id;
        //         if(to.url != '/home'){
        //             if(data.details){
        //         console.log('esta en True el ID');
        //         ev.preventDefault();  //abort event propagation
        //             $location.path(to.url);

        //         }else{

        //                 ev.preventDefault();  //abort event propagation
        //                 $location.path('/login'); 

        //         }
        //         }    
        // });
        
           
            
        // //     if (1 === 2) {
        // //                     ev.preventDefault(); //abort event propagation
        // //                     $location.path('/home'); // Redirects to error page
                        
        // //             } else {
        // //                 ev.preventDefault(); // abort event propagation
        // //                 $location.path('/home'); // Redirects back to main page
        // //             }
                
        // });

    }).config([
        'cfpLoadingBarProvider',
        function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;

        }

    ]);
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
    angular.module('appverseprojectApp').animation('.fade-in', function() {
        return {
            enter: function(element, done) {
                element.css({
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 1000, done);
            },
            leave: function(element, done) {
                element.css({
                    opacity: 0
                });
                done();
            }
        };
    });
}());