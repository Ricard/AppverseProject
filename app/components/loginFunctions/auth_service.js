'use strict';

    var app = angular.module('RssFeedModule');
       app.service('AuthService', ['$http', '$cookieStore', 'Backand','$q', AuthService]);

    function AuthService($http, $cookieStore, Backand,$q) {

        var self = this;
        var baseUrl = Backand.getApiUrl() + '/1/objects/';
        self.appName = '';
        self.currentUser = {};
        
        
        // Making a Promise to Resolve Rssfeed before to Load.
        self.getCurrentUser = function(){
            var d = $q.defer();
            getCurrentUserInfo()
                    .then(function (data) {
                        self.currentUser.details = data;
                        d.resolve(self.currentUser);
                        
                    });
                    return d.promise;
        };

        loadUserDetails();

        function loadUserDetails() {
            self.currentUser.name = Backand.getUsername();
            if (self.currentUser.name) {
                getCurrentUserInfo()
                    .then(function (data) {
                        self.currentUser.details = data;
                    });
            }
        }

        self.getSocialProviders = function () {
            return Backand.getSocialProviders();
        };

        self.socialSignIn = function (provider) {
            return Backand.socialSignIn(provider)
                .then(function (response) {
                    loadUserDetails();
                    return response;
                });
        };

        self.socialSignUp = function (provider) {
            return Backand.socialSignUp(provider)
                .then(function (response) {
                    loadUserDetails();
                    return response;
                });
        };

        self.setAppName = function (newAppName) {
            self.appName = newAppName;
        };

        self.signIn = function (username, password, appName) {
            return Backand.signin(username, password, appName)
                .then(function (response) {
                    loadUserDetails();
                    return response;
                });
        };

        self.signUp = function (firstName, lastName, username, password, appName) {
            return Backand.signup(firstName, lastName, username, password, password)
                .then(function (signUpResponse) {

                    if (signUpResponse.data.currentStatus === 1) {
                        return self.signIn(username, password, appName)
                            .then(function () {
                                return signUpResponse;
                            });

                    } else {
                        return signUpResponse;
                    }
                });
        };

        self.changePassword = function (oldPassword, newPassword) {
            return Backand.changePassword(oldPassword, newPassword);
        };

        self.requestResetPassword = function (username) {
            return Backand.requestResetPassword(username, self.appName);
        };

        self.resetPassword = function (password, token) {
            return Backand.resetPassword(password, token);
        };

        self.logout = function () {
            Backand.signout().then(function () {
                $cookieStore.remove('username');
                angular.copy({}, self.currentUser);
            });
        };

        function getCurrentUserInfo() {
            return $http({
                method: 'GET',
                url: baseUrl + 'users',
                params: {
                    filter: JSON.stringify([{
                        fieldName: 'email',
                        operator: 'contains',
                        value: self.currentUser.name
                    }])
                }
            }).then(function (response) {
                if (response.data && response.data.data && response.data.data.length === 1){
                    return response.data.data[0];}
            });
        }

    }


