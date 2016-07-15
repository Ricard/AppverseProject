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
        'loginModule',
        'angular-loading-bar',
        'RssFeedModule',
        'toDoModule',
        'ngStorage'


    ]).run(function($log, editableOptions, $rootScope, $location, userService,$state) {
        $log.debug('testAlphaApp run');
        editableOptions.theme = 'bs3';
        $('#menu-toggle').click(function(e) {
            e.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
  
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///// ROUTE INTERCEPTOR. PREVENT LOAD PAGES THAT REQUIRES LOGGED USER
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
           $rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams){
             console.log('values of TO:', to);
             //console.log('values of TOPARAMS:', toParams);
             //console.log('values of FROM:', from);
             //console.log('values of FROMPARAMS:', fromParams);    
             //console.log('values of EV:', ev);  
             
             if (to.module === 'registered' && !userService.getUser()){
                 console.log('Modul privat i usuari no Logat');
                 ev.preventDefault();
                 $state.go('login');
             }
         });   
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
            
            
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