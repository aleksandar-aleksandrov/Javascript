angular.module('learn-german.controllers')
    .controller('RoundThreeController', ['$scope','$location', '$http' ,'user', function($scope, $location, $http, user){
        $scope.level = user.level
        $scope.points = user.points

        $scope.sentences = []

        $http({
            url: 'api/roundThree.php',
            method: 'post',
            data: {
                levelNumerical: user.levelNumerical
            }
        }).success(function(data) {
            $scope.sentences = data
            addMissingWords()
        }).error(function(data){

        })


        function addMissingWords(){
            var str = 'Missing words: '
            for(var i = 0; i < $scope.sentences.length; i++){
                if (i == $scope.sentences.length - 1){
                    str += $scope.sentences[i].missingWord
                } else {
                    str += ($scope.sentences[i].missingWord + ', ')
                }
            }
            var el = angular.element(document.querySelector('.words'))
            el.html(str)
        }

        

        $scope.goGameOver = function(){
            $location.path('/gameover')
        }
    }])