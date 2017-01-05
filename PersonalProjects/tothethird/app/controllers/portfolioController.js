angular.module('tothethird.controllers')
    .controller('PortfolioController', ['$scope', '$http', '$location', function($scope, $http, $location){
        getProjects()

        function getProjects(){
            $http({
                method: 'post',
                url: 'api/getProjects.php'
            }).success(function(data){
                if(data){
                    console.log(data)
                    $scope.projects = data;
                    $scope.projects.reverse();
                    console.log($scope.projects);
                }else{
                    $location.path('/error')
                }
            })
        }

        
    }])