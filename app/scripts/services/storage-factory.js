'use strict';

/**
 * @ngdoc service
 * @name currencyApp.storageFactory
 * @description
 * # storageFactory
 * Factory in the currencyApp.
 */

angular
    .module('currencyApp')
  .factory('storageFactory', function () {

        return {
            storeData: function (key, data) {
                sessionStorage.setItem(key, angular.toJson(data));
            },
            getData: function(key) {
                return angular.fromJson(sessionStorage.getItem(key));
            }
        };
    });
