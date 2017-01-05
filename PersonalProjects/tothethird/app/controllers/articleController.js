angular.module('tothethird.controllers')
    .controller('ArticleController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
        $('.carousel').carousel()
        $scope.id = $routeParams.id;
        $scope.article
        console.log($routeParams.id)
        getArticle()

        function getArticle(){
            $http({
                method: 'post',
                url: "api/getArticle.php",
                data: { id: $scope.id }
            }).success(function(data){
                console.log(data);
                $scope.article = data
            }).error(function(data){
                $location.path("/error")
            })
        }
        $scope.goBlog = function(){
            $location.path("/blog")
        }
    }])