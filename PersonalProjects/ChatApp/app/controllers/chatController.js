app.
    controller('ChatController', ['$scope', '$location', '$http', 
        function($scope, $location, $http){
            $scope.users = []
            $http({
                url: 'api/getUsers.php',
                method: 'post'
            }).success(function(data){
                console.log(data)
                $scope.users = data
            })

            $scope.glclick = function(f){
                console.log('click')
                console.log(f)
            }

}])