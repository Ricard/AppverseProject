'use strict';
module.exports = {
  update: {
    src: ['app/index.html'],
    options: {
      exclude: ['/sockjs-client/',
        '/sifter/',
        '/json3/',
        '/microplugin/',
        '/placeholders/',
        '/angular-highlightjs/',
        '/stomp-websocket/'
      ],
      overrides: {
        jquery: {
          main: ['dist/jquery.min.js']
        },
        angular: {
          main: ['angular.min.js']
        },
        'angular-touch': {
          main: ['angular-touch.min.js']
        },
        'Chart.js': {
          main: ['Chart.min.js']
        },
        'angular-chart.js': {
          main: ['dist/angular-chart.min.js', 'dist/angular-chart.css']
        },
        'bootstrap-sass': {
          main: ['assets/javascripts/bootstrap.min.js']
        },
        'angular-bootstrap': {
          main: ['ui-bootstrap-tpls.min.js']
        },
        'ag-grid': {
          main: ['dist/ag-grid.min.js']
        },
        'angular-animate': {
          main: ['angular-animate.min.js']
        },
        'angular-ui-router': {
          main: ['release/angular-ui-router.min.js']
        },
        'angular-ui-select': {
          main: ['dist/select.min.js', 'dist/select.min.css']
        },
        'angularjs-slider': {
          main: ['dist/rzslider.min.js', 'dist/rzslider.min.css']
        },
        'angular-resize': {
          main: ['dist/angular-resize.min.js']
        },
        'angular-sanitize': {
          main: ['angular-sanitize.min.js']
        },
        'angular-loading-bar': {
          main: ['build/loading-bar.min.js', 'build/loading-bar.min.css']
        },
        'angular-ripple': {
          main: ['angular-ripple.js']
        },
        'angular-xeditable': {
          main: ['dist/css/xeditable.css', 'dist/js/xeditable.js']
        },
        selectize: {
          main: ['dist/css/selectize.css']
        },
        'appverse-web-html5-core': {
          main: ['dist/appverse/appverse.min.js',
            'dist/appverse-router/appverse-router.min.js',
            'dist/appverse-utils/appverse-utils.min.js',
            'dist/appverse-cache/appverse-cache.min.js',
            'dist/appverse-logging/appverse-logging.min.js',
            'dist/appverse-performance/appverse-performance.min.js',
            'dist/appverse-rest/appverse-rest.min.js',
            'dist/appverse-translate/appverse-translate.min.js'
          ]
        },
        'angular-cache': {
          main: ['dist/angular-cache.min.js']
        },
        lodash: {
          main: ['lodash.min.js']
        },
        restangular: {
          main: ['dist/restangular.min.js']
        },
        'angular-translate': {
          main: ['angular-translate.min.js']
        },
        'angular-translate-loader-static-files': {
          main: ['angular-translate-loader-static-files.min.js']
        },
        'angular-dynamic-locale': {
          main: ['src/tmhDynamicLocale.js']
        }
      }
    }
  }
};