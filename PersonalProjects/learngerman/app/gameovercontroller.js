angular.module('learn-german.controllers')
    .controller('GameOverController', ['$scope', '$location', 'centerElement', 'user', 'Socialshare', 
        function($scope, $location, centerElement, user, Socialshare){

        // VARIABLES

        
        var msg = "Thanks for playing! You got " + user.points + "/300 points!<br/>Share your results or start over..."
        $scope.isShown = false

        //FUNCTIONS

        centerElement($(".gameover"))

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