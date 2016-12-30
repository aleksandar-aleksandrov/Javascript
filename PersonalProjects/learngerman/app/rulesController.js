angular.module('learn-german.controllers')
    .controller('RulesController', ['$scope','$location', 'centerElement', 'user', function($scope, $location, centerElement, user){
        // VARIABLES

        // Set User's Level and Points
        $scope.level = user.level
        $scope.points = user.points

        $scope.isShown = false
        
        // FUNCTIONS

        // Center Element Vertically
        centerElement($(".container-rules"))

        // Function for the typing-of-string effect
        // TYPED.JS is used as additional library

        $(function(){
            $(".rules-text").typed({
                strings: ["In First Round, You Have To Translate 5 Words.<br> The Second Round Is The Good Old Hangman.<br> In Third Round, You Will Fill In The Gaps."],
                typeSpeed: 0,
                onStringTyped: function() {
                    $scope.isShown = true
                    $scope.$apply()
                }
            })
        })


        // START PLAYING
        $scope.startFirstRound = function(){
            $location.path("/first-round")
        }
        
    }])