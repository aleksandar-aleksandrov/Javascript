angular.module('tothethird.controllers')
    .controller('ProjectController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
        $('.carousel').carousel()
        $scope.id = $routeParams.id;
        getProject()
        function getProject(){
            $http({
                method: 'post',
                url: 'api/getProject.php',
                data: { id: $scope.id }
            }).success(function(data){
                console.log(data)
                if(!data.error){
                    $scope.project = data
                } else {
                    $location.path("/error")
                }
            }).error(function(data){
                $location.path("/error")
            })
        }
        $scope.goBack = function(){
            $location.path("/portfolio")
        }
    }])