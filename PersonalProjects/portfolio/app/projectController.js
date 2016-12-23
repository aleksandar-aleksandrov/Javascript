angular.module('portfolio.controllers')
    .controller('ProjectController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
        var projects = []

        $http({
            url: 'json/projects.json',
            method: 'get'
        }).then(function(res){
            console.log(res.data.Projects)
            console.log($routeParams.id)
            projects = res.data.Projects
            console.log(projects[1])
            findProject()
        }, function(){

        })

        function findProject(){
            for(var i = 0; i < projects.length; i++){
                if($routeParams.id == parseInt(projects[i].id)){
                    $scope.project = projects[i]
                    console.log($scope.project)
                }
            }
        }
}])