'use strict';

/**
 * @ngdoc overview
 * @name currencyApp
 * @description
 * # currencyApp
 *
 * Main module of the application.
 */

angular
    .module('currencyApp', ['ngAnimate', 'ngRoute', 'ngTouch'])
    .config(function ($routeProvider) {

        var currency = function (resolveFactory) {
            return resolveFactory.currencyResolve();
        };

        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            resolve: {
                currencyResolve: currency
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    });
