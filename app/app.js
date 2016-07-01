(function () {
    'use strict';
    agGrid.initialiseAgGridWithAngular1(angular);
    angular.module('App.Controllers', []);
    angular.module('App.Services', []);
    angular.module('appverseprojectApp', [
        'appverse.translate',
        'appverse.rest',
        'appverse.performance',
        'appverse.logging',
        'appverse.cache',
        'ngAnimate',
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
        'angular-loading-bar',
        'App.Services'
    ]).run(function ($log, editableOptions) {
        $log.debug('testAlphaApp run');
        editableOptions.theme = 'bs3';
        $('#menu-toggle').click(function (e) {
            e.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
    }).config([
        'cfpLoadingBarProvider',
        function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }
    ]);
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/components/stock',
                'RequestSuffix': '.json'
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
    angular.module('appverseprojectApp').animation('.fade-in', function () {
        return {
            enter: function (element, done) {
                element.css({ opacity: 0 }).animate({ opacity: 1 }, 1000, done);
            },
            leave: function (element, done) {
                element.css({ opacity: 0 });
                done();
            }
        };
    });
}());