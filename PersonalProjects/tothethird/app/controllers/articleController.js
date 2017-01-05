angular.module('tothethird.controllers')
    .controller('ArticleController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
        $('.carousel').carousel()
        $scope.id = $routeParams.id;
        console.log($routeParams.id)
    }])