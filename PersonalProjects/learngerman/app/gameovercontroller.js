angular.module('learn-german.controllers')
    .controller('GameOverController', ['$scope', 'user', function($scope, user){
        
        $scope.startOver = function(){
            $location.path('/')
        }
    }])