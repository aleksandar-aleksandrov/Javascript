angular.module('learn-german.controllers')
    .controller('RulesController', ['$scope','$location', 'user', function($scope, $location, user){
        $scope.level = user.level
        $scope.points = user.points

        $scope.isShown = false
        
        $(function(){
            $(".rules-text").typed({
                strings: ["In First Round, You Have To Translate 5 German Words In English.<br> In The Second Round You Will Meet the Good Old Hangman.<br> In Third Round You Will Fill The Gaps In A Given Text."],
                typeSpeed: 0,
                onStringTyped: function() {
                    $scope.isShown = true
                    $scope.$apply()
                }
            })
        })
        $scope.startFirstRound = function(){
            $location.path("/first-round")
        }
        
    }])