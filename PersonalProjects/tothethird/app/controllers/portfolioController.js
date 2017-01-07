angular.module('tothethird.controllers')
    .controller('PortfolioController', ['$scope', '$http', '$location', function($scope, $http, $location){
        getProjects()

        function getProjects(){
            $http({
                method: 'post',
                url: 'api/getProjects.php'
            }).success(function(data){
                if(data){
                    $scope.projects = data
                    $scope.projects.reverse()
                }else{
                    $location.path('/error')
                }
            }).error(function(data){
                $location.path('/error')
            })
        }

        
    }])