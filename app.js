/*global angular */
var app = angular.module('flapperNews', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainController'
            })
        
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: '/posts.html',
                controller: 'PostsController'
            });
        
        $urlRouterProvider.otherwise('home');
    }]);

app.factory('posts', [function () {
    'use strict';
    var o = {
        posts: []
    };
    return o;
}]);

app.controller('MainController', [
    '$scope', 'posts',
    function ($scope, posts) {
        'use strict';
        $scope.posts = posts.posts;
        
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];
        
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === "") { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            $scope.title = "";
            $scope.link = "";
        };
        
        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
    }
]);

app.controller('PostsController', [
    '$scope',
    '$stateParams',
    'posts',
    function ($scope, $stateParams, posts) {
        'use strict';
        
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        });
        
        $scope.post = posts.posts[$stateParams.id];
    }
]);





