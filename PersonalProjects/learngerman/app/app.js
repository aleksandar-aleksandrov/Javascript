angular.module('learn-german', ['ngRoute', 'learn-german.controllers'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/',{
            templateUrl: 'views/init.html',
            controller: 'InItController'
        }).when('/choose-level',{
            templateUrl: 'views/choose-level.html',
            controller: 'ChooseLevelController'
        }).when('/first-round-pregame',{
            templateUrl: 'views/round1-pregame.html',
            controller: "RoundOneController"
        }).when('/first-round',{
            templateUrl: 'views/round1.html',
            controller: "RoundOneController"
        }).otherwise({
            redirectTo: '/'
        })
    }])