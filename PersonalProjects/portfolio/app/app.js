var app = angular.module('portfolio', ['ngRoute', 'portfolio.controllers'])

app.config(function($routeProvider){
    $routeProvider.when('/about-me', {
        templateUrl: 'views/about-me.html',
        controller: 'AboutMeController'
    }).when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController'
    }).when('/contact-me', {
        templateUrl: 'views/contact-me.html',
        controller: 'ContactController'
    }).when('/', {
        redirectTo: 'about-me'
    }).when('/error', {
        templateUrl: 'views/error.html'
    }).otherwise({
        redirectoTo: 'error'
    })
})