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
                  socialProviders: AuthService.getSocialProviders()
                }
              }).result.then(function(userlogin){
                console.log('Login from state????');
                  AuthService.signIn(userlogin.username, userlogin.password, self.appName).then(
                    function(){
                      $state.go('rssFeed');
                    })
              },
                  function(){
                        console.log('cancel from state????');
                        $state.go('home');
                    })
            }]

          })
          .state('register', {
            parent: 'home',
            url: '/register',
            onEnter: ['$state', '$uibModal','AuthService', function($state, $uibModal,$uibModalInstance, AuthService) {
               //$uibModalInstance.close();
              $uibModal.open({
                animation: true,
                controller: 'userRegisterModalCtrl as login',
                templateUrl: 'components/loginFunctions/registerTemplate.html',
                resolve: {
                  socialProviders: AuthService.getSocialProviders()
                }
              });
            }]

          })
          
          
          // .state('buildAgent.delete', {
          //       parent: 'buildAgent',
          //       url: '/{id}/delete',
          //       data: {
          //           authorities: ['ROLE_USER'],
          //       },
          //       onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
          //           $uibModal.open({
          //               templateUrl: 'components/entities/buildAgent/buildAgent-delete-dialog.html',
          //               controller: 'BuildAgentDeleteController',
          //              size: 'md',
          //               resolve: {
          //                   entity: ['BuildAgent', function(BuildAgent) {
          //                       return BuildAgent.get({id : $stateParams.id});
          //                   }]
          //               }
          //           }).result.then(function(result) {
          //               $state.go('buildAgent', null, { reload: true });
          //           }, function() {
          //               $state.go('^');
          //           })
          //       }]
          //   });

          
          
          
          
          
          
          ;
      }
    ]);