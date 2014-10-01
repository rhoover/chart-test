'use strict';

/**
 * @ngdoc service
 * @name currencyApp.currencyFactory
 * @description
 * # currencyFactory
 * Factory in the currencyApp.
 */

angular.module('currencyApp')
    .factory('currencyFactory', function ($http, currencyKey) {

        return {
            getCurrencyData: function () {
                return $http.get('http://openexchangerates.org/api/latest.json?app_id=' + currencyKey, {cache:false})
                    .then(function (result) {
                        return result.data;
                    });
            }
        };
    });
