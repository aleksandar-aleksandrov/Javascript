var app = angular.module('learn-german', ['ngRoute', '720kb.socialshare', 'learn-german.controllers'])
app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/begin.html',
            controller: 'BeginController'
        }).when('/choose-level', {
            templateUrl: 'views/choose-level.html',
            controller: 'ChooseLevelController'
        }).when('/rules', {
            templateUrl: 'views/rules.html',
            controller: "RulesController"
        }).when('/first-round', {
            templateUrl: 'views/round-one.html',
            controller: "RoundOneController"
        }).when('/second-round', {
            templateUrl: 'views/round-two.html',
            controller: "RoundTwoController"
        }).when('/third-round', {
            templateUrl: 'views/round-three.html',
            controller: "RoundThreeController"
        }).when('/gameover', {
            templateUrl: 'views/gameover.html',
            controller: "GameOverController"
        }).when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorController'
        }).otherwise({
            redirectTo: '/'
        })
    }])

// USER DATA
app.value('user', { 
    level: 'Beginner',
    levelNumerical: '1',
    points: '0',
    firstRound: false,
    secondRound: false,
    thirdRound: false
 })


app.factory('centerElement', [function(){
     return function(element){
        element.css("position","absolute")
        element.css("top", Math.max(0, (($(window).height() - $(element).outerHeight()) / 3) + $(window).scrollTop()) + "px")
     }
}])
