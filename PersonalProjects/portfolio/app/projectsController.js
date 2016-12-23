angular.module('portfolio.controllers')
    .controller('ProjectsController', ['$scope', '$http', function($scope, $http){
        $scope.projects = [
            'Learn German',
            'Portfolio',
            'Math App',
            'Chat It',
            'd',
            'dtry'
        ]

        $http({
            url: 'json/projects.json',
            method: 'get'
        }).then(function(res){
            console.log(res.data.Projects)
            $scope.projects = res.data.Projects
        }, function(){

        })
}])