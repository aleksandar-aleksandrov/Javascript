angular.module('learn-german.controllers')
    .controller('ErrorController', ['$scope', '$location','user', function($scope, $location, user){
        
        $scope.goBack = function(){
            resetValues()
            $location.path('/')
        }

        function resetValues(){
            user.level = 'Beginner'
            user.levelNumerical = '1'
            user.points = '0'
            user.firstRound = false
            user.secondRound = false
            user.thirdRound = false
        }
    }])

