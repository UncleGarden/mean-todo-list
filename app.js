/*global angular */
var app = angular.module('flapperNews', []);

app.controller('MainController', [
    '$scope',
    function ($scope) {
        'use strict';
        $scope.posts = [
            'post 1',
            'post 2',
            'post 3',
            'post 4',
            'post 5'
        ];
    }
]);

