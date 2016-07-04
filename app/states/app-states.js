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
         
          .state('login', {
           // parent: 'home',
            url: '/login',
            onEnter: ['$state', '$uibModal','AuthService', function($state, $uibModal, AuthService) {
              $uibModal.open({
                animation: true,
                controller: 'userLoginModalCtrl as login',
                templateUrl: 'components/loginFunctions/loginTemplate.html',
                resolve: {
                //  socialProviders: AuthService.getSocialProviders()
                }
              }).result.then(function(userlogin){
                console.log('Login from state????');
                  AuthService.signIn(userlogin.username, userlogin.password, self.appName).then(
                    function(){
                      $state.go('rssFeed');
                    })
              },
                  function(cancel){
                       // console.log('cancel from state????');
                       if(cancel == 'social'){
                         $state.go('rssFeed');
                       }else{
                        $state.go('home');
                       }
                    })
            }]

          })
          .state('register', {
            parent: 'home',
            url: '/register',
            onEnter: ['$state', '$uibModal','AuthService', function($state, $uibModal, AuthService) {
    
              $uibModal.open({
                animation: true,
                controller: 'userRegisterModalCtrl as login',
                templateUrl: 'components/loginFunctions/registerTemplate.html',
                resolve: {
               //   socialProviders: AuthService.getSocialProviders()
                }
              }).result.then(
                function(userRegister, username){
                  AuthService.signUp(userRegister.firstName, userRegister.lastName,
                     userRegister.username, userRegister.password, AuthService.appName)
                     .then($state.go('rssFeed')).error(function(error){console.log('error de signup', error)});
                  console.log('usuari a registrar', userRegister);
                },
                function(cancel){
                   if(cancel == 'social'){
                         $state.go('rssFeed');
                       }else{
                        $state.go('home');
                       }
                })
              
              ;
            }]

          })
          
          ;
      }
    ]);