'use strict';

/**
 * @ngdoc function
 * @name currencyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the currencyApp
 */

angular
    .module('currencyApp')
    .controller('MainCtrl', function ($scope, storageFactory) {
        $scope.currencyData = storageFactory.getData('currency-data');
    });
