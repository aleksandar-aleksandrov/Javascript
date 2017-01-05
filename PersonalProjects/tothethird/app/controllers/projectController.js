angular.module('tothethird.controllers')
    .controller('ProjectController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
        $scope.id = $routeParams.id;
        getFiles();
        $scope.images = [
            {
                title : 'This is amazing photo of nature',
                alt : 'amazing nature photo',
                thumbUrl : 'https://pixabay.com/static/uploads/photo/2016/06/13/07/32/cactus-1453793__340.jpg',
                url : 'https://pixabay.com/static/uploads/photo/2016/06/13/07/32/cactus-1453793_960_720.jpg',
                extUrl : 'http://mywebsitecpm/photo/1453793'
            },
            {
                url : 'https://pixabay.com/static/uploads/photo/2016/06/10/22/25/ortler-1449018_960_720.jpg'
            },
            {
                thumbUrl : 'https://pixabay.com/static/uploads/photo/2016/04/11/18/53/aviator-1322701__340.jpg',
                url : 'https://pixabay.com/static/uploads/photo/2016/04/11/18/53/aviator-1322701_960_720.jpg'
            }
        ];
        function getFiles(){
            $http({
                method: 'post',
                url: 'api/getFiles.php',
                data: { id: $scope.id }
            }).success(function(data){
                $scope.screenshots = data
                $scope.$apply()
                console.log(data)
            }).error(function(data){
                $location.path("/error")
            })
        }
        console.log($scope.screenshots)
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