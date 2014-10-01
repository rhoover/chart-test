'use strict';

/**
 * @ngdoc directive
 * @name currencyApp.directive:barChart
 * @description
 * # barChart
 */

angular
    .module('currencyApp')
    .directive('barChart', function () {
        return {
            restrict: 'EA',
            scope: {
                retrievedData: '='
            },
            link: function (scope, element, attrs) {

                var data = scope.retrievedData.rates;
                var prop = Object.keys(data);

                var rate =[];
                for(var key in data) {
                    if (data.hasOwnProperty(key)) {
                        rate.push(data[key]);
                    }
                }

                var chart, bar_height = 15, height = bar_height*Object.keys(data).length, x, y ;

console.log(prop);
                var svg = d3.select(element[0])
                    .append('svg')
                    .style('width', '100%')
                    .attr('class', 'chart')
                    .attr('height', height);

                x = d3.scale.linear()
                    .domain([0, d3.max(rate)])
                    .range([25, 620]); //this normalizes presentation of the rate range differences
                y = function (i) {return bar_height*i};

                svg.selectAll('rect')
                    .data(rate)
                    .enter()
                    .append('rect')
                    .attr('x', 0)
                    .attr('y', function (d,i) {return y(i);})
                    .attr('width', x)
                    .attr('height', bar_height);
                svg.selectAll('text')
                    .data(rate)
                    .enter()
                    .append('text')
                    .attr('x', 200)
                    .attr('y', function (d,i) {return y(i) + bar_height/2;})
                    .attr('dx', -5)
                    .attr('dy', '.36em')
                    .attr('text-anchor', 'start')
                    .text(String);

            } //end link function
        };
    });
