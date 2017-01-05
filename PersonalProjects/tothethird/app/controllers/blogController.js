angular.module('tothethird.controllers')
    .controller('BlogController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
        $scope.articles = []
        loadArticles()

        function loadArticles(){
            $http({
                method: 'post',
                url: 'api/getArticles.php'
            }).success(function(data){
                $scope.articles = data.reverse()
                console.log(data)
            })
        }
    }])