angular.module('tothethird.controllers')
    .controller('ArticleController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $scope.id = $routeParams.id
        $scope.article
        getArticle()

        function getArticle(){
            $http({
                method: 'post',
                url: "api/getArticle.php",
                data: { id: $scope.id }
            }).success(function(data){
                if(!data.error){
                    $scope.article = data
                } else {
                    $location.path("/error")
                }
                
            }).error(function(data){
                $location.path("/error")
            })
        }

        $scope.goBlog = function(){
            $location.path("/blog")
        }
    }])