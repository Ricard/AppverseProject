'use strict';

angular.module('App.Services')
	.service('listService', function(){
		this.list = [];
		this.addToList = function (id) {
			this.list.push(id);
			}
		this.getList = function () {
			return this.list;
			}
		}
	);