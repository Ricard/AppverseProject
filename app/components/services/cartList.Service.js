'use strict';

angular.module('App.Services')
	.service('cartListService', function(){
		this.list = [];
		this.addToList = function (stock) {
			this.list.push(stock);
			}
		this.getList = function () {
			return this.list;
			}
		this.removeList = function() {
			this.list = [];
			}
		}
	);