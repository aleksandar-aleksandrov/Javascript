var app = angular.module('chat-app', ['ngRoute', 'ngCookies'])

app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        }).when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatController'
        }).when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorController'
        }).otherwise({
            redirectTo: '/chat'
        })
    }])

// Function is taken from https://github.com/cornflourblue/angular-registration-login-example/blob/master/app.js

/*app.run(['$rootScope', '$location', '$cookies', '$http', function($rootScope, $location, $cookies, $http){
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/main']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/main');
            }
        });
    }])
*/
