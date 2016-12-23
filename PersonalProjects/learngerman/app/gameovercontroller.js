angular.module('learn-german.controllers')
    .controller('GameOverController', ['$scope', '$location', 'user', function($scope, $location, user){

        var msg = "Thanks for playing! You got " + user.points + "/300 points!<br/>Share your results or start over..."
        $scope.isShown = false

        $(function(){
            $(".over-text").typed({
                strings: [msg],
                typeSpeed: 0,
                onStringTyped: function() {
                    $scope.isShown = true
                    $scope.$apply()
                }
            })
        })

        $scope.startOver = function(){
            $location.path('/')
        }
    }])