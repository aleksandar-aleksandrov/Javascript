/* INITIALIZE APPLICATION */

var app = angular.module('noteit', ['ngRoute'])

/* CONFIGURE ROUTING */

app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        }).when('/notes', {
            templateUrl: 'views/notes.html',
            controller: 'NotesController'
        }).when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorController'
        }).otherwise({
            redirectTo: '/main'
        })
    }])

/* FILTERS */

app.filter('startFrom', function(){
    return function(input, start){
        if(input) {
            start = +start;
            return input.slice(start)
        }
        return []
    }
})
