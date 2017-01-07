var app = angular.module('tothethird', ['ngRoute', 'tothethird.controllers'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
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
    }).when('/blog/article/:id/', {
        templateUrl: 'views/article.html',
        controller: 'ArticleController',
        activeitem: 'blog'
    }).when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'MailController'
    }).when('/error',{
        templateUrl: 'views/error.html',
        controller: "ErrorController"
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

                    if('#' + currentPath === element[0].attributes['href'].nodeValue) {
                        element.parent().addClass('active')
                    } else {
                        element.parent().removeClass('active')
                    }
                })
            }
        }
}])
