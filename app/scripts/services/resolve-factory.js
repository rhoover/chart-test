'use strict';

/**
 * @ngdoc service
 * @name currencyApp.resolveFactory
 * @description
 * # resolveFactory
 * Factory in the currencyApp.
 */

angular
    .module('currencyApp')
    .factory('resolveFactory', function (currencyFactory, storageFactory) {

        return {
            currencyResolve: function () {
              if (storageFactory.getData('currency-data') !== null) {
                 return;
              } else {
                var currencyDataReturn = currencyFactory.getCurrencyData()
                    .then(function success(data) {
                        storageFactory.storeData('currency-data', data);
                    }, function failure() {
                        alert('well, shit');
                    });
                    return currencyDataReturn;
              }
            }
        };
    });
