var app = angular.module('tothethird', ['ngRoute', 'tothethird.controllers'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).when('/portfolio',{
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioController'
    }).when('/blog',{
        templateUrl: 'views/blog.html',
        controller: 'BlogController'
    }).when('/portfolio/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectController',
        activeitem: 'portfolio'
    }).when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .otherwise({  
        redirectTo: '/'
    })
}])

app.directive('isActive', ['$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.location = $location
                scope.$watch('location.path()', function(currentPath) {
                    console.log(currentPath)
                    console.log(element[0].attributes['href'].nodeValue)
                    if('#' + currentPath === element[0].attributes['href'].nodeValue) {
                        element.parent().addClass('active')
                    } else {
                        element.parent().removeClass('active')
                    }
                })
            }
        }
}])
