//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('appverseprojectApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        ///////////////////////////////
        // 1-Redirects and Otherwise //
        ///////////////////////////////

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        $urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        //                .when('/t?id', '/topics/:id')
        //                    .when('/t/:id', '/topics/:id')


        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
          .otherwise('/home');
        //////////////////////////
        // 2-State Configurations
        // Several states hav been configured:
        // home
        // tasks
        //
        //////////////////////////
        // We must configure states using $stateProvider.
        $stateProvider
        //////////
        // Home //
        //////////
          .state('home', {
          // Use a url of '/' to set a states as the 'index'.
          url: '/home',
          templateUrl: 'components/home/home.html'
        })
        //////////////
        // ToDoList //
        //////////////
          .state('toDoList', {
          // Use a url of '/' to set a states as the 'index'.
          url: '/toDoList',
          templateUrl: 'components/toDoList/view/toDoList.html',
          controller: 'toDoListController as tdListCtrl',
      
          resolve: {
          tdlist: ['toDoResource','AuthService', function(toDoResource, AuthService) {
            console.log('ENTREM EN RESOLVE TDLIST');
              var iduser;
           return AuthService.getCurrentUser().then(function(data){
                iduser = data.details.id;
                console.log('id del usuari', iduser);
                var filterParams = {
                      "fieldName": "users",
                      "operator": "in",
                      "value": iduser
                      }
            return toDoResource.get({filter: filterParams});
            });            
          }]
        }
        })
        //////////////////////
        // ToDo New Element //
        /////////////////////
          .state('toDoDetail/new', {
          // Use a url of '/' to set a states as the 'index'.
          url: '/toDoDetail/new',
          templateUrl: 'components/toDoList/view/toDoDetail.html',
          controller: 'elementController as detailCtrl',
        })
        //////////////////////////
        // ToDo Element Detail //
        ////////////////////////
          .state('toDoDetail', {
          // Use a url of '/' to set a states as the 'index'.
          url: '/toDoDetail/:id',
          templateUrl: 'components/toDoList/view/toDoDetail.html',
          controller: 'elementController as detailCtrl',
        })
        ////////////////////
        // RssFeed /////////
        ////////////////////
        .state('rssFeed', {
            url: '/rssFeed',
            templateUrl: 'components/rssFeeder/feedList.html',
            controller: 'rssFeedCtrl as rssCtrl',
            resolve: {
              loggedUser: ['AuthService', function(AuthService) {
                return AuthService.getCurrentUser();
              }]
            }
          })
          /////////////////
          // Login Modal //
          //////////////////
          .state('login', {
            // parent: 'home',
            url: '/login',
            onEnter: ['$state', '$uibModal', 'AuthService', function($state, $uibModal, AuthService) {
              $uibModal.open({
                animation: true,
                controller: 'userLoginModalCtrl as login',
                templateUrl: 'components/loginFunctions/loginTemplate.html',
                resolve: {
                  //  socialProviders: AuthService.getSocialProviders()
                }
              }).result.then(function(userlogin) {
                  console.log('Login from state????');
                  AuthService.signIn(userlogin.username, userlogin.password, 'aedesigndashboard').then(
                    function() {
                      $state.go('rssFeed');
                    })
                },
                function(cancel) {
                  // console.log('cancel from state????');
                  if (cancel == 'social') {
                    $state.go('rssFeed');
                  } else {
                    $state.go('home');
                  }
                })
            }]

          })
          /////////////////////
          // Register Modal //
          ///////////////////
          .state('register', {
            parent: 'home',
            url: '/register',
            onEnter: ['$state', '$uibModal', 'AuthService', function($state, $uibModal, AuthService) {

              $uibModal.open({
                animation: true,
                controller: 'userRegisterModalCtrl as login',
                templateUrl: 'components/loginFunctions/registerTemplate.html',
                resolve: {
                  //   socialProviders: AuthService.getSocialProviders()
                }
              }).result.then(
                function(userRegister, username) {
                  AuthService.signUp(userRegister.firstName, userRegister.lastName,
                      userRegister.username, userRegister.password, AuthService.appName)
                    .then($state.go('rssFeed'));
                  console.log('usuari a registrar', userRegister);
                },
                function(cancel) {
                  if (cancel == 'social') {
                    $state.go('rssFeed');
                  } else {
                    $state.go('home');
                  }
                })

              ;
            }]

          })

        ;
      }
    ]);