'use strict';

angular.module('App.Services')
	.service('listService', function(){
		var list = [];
		var addToList = function (id) {
			list.push(id);
			}
		var getList = function () {
			return list;
			}
		}
	);